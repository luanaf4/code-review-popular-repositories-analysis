import { graphql } from "@octokit/graphql";
import fs from 'fs';
import path from 'path';
import { createObjectCsvWriter } from 'csv-writer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

// Função para carregar consultas GraphQL de arquivos
function loadGraphQLQuery(filename) {
  return fs.readFileSync(path.join(__dirname, 'queries', filename), 'utf8');
}

// Carregar consultas GraphQL
const getReposQuery = loadGraphQLQuery('getRepos.graphql');
const getPRsQuery = loadGraphQLQuery('getPRs.graphql');
const getPRDetailsQuery = loadGraphQLQuery('getPRDetails.graphql');

// Função para obter os 200 repositórios mais populares
async function getPopularRepositories() {
  let repos = [];
  let endCursor = null;

  while (repos.length < 200) {
    const { search } = await graphqlWithAuth(getReposQuery, {
      queryString: "stars:>1000",
      first: 100,
      after: endCursor,
    });

    repos = repos.concat(search.nodes);
    
    if (!search.pageInfo.hasNextPage) break;
    endCursor = search.pageInfo.endCursor;
  }

  return repos.slice(0, 200);
}

// Função para obter PRs qualificados
async function getQualifiedPRs(repo) {
  let allPRs = [];
  let endCursor = null;

  while (true) {
    const { repository } = await graphqlWithAuth(getPRsQuery, {
      owner: repo.owner.login,
      name: repo.name,
      first: 100,
      after: endCursor,
    });

    const qualifiedPRs = repository.pullRequests.nodes.filter(pr => {
      const createdAt = new Date(pr.createdAt);
      const closedAt = new Date(pr.closedAt);
      const reviewTime = (closedAt - createdAt) / (1000 * 60 * 60); // em horas

      return (pr.merged || pr.state === 'CLOSED') &&
             pr.reviews.totalCount > 0 &&
             reviewTime > 1;
    });

    allPRs = allPRs.concat(qualifiedPRs);

    if (!repository.pullRequests.pageInfo.hasNextPage) break;
    endCursor = repository.pullRequests.pageInfo.endCursor;
  }

  return allPRs;
}

// Função para obter detalhes do PR
async function getPRDetails(pr) {
  const { repository } = await graphqlWithAuth(getPRDetailsQuery, {
    owner: pr.repository.owner.login,
    name: pr.repository.name,
    number: pr.number,
  });

  const prDetails = repository.pullRequest;
  return {
    repo: `${pr.repository.owner.login}/${pr.repository.name}`,
    prNumber: pr.number,
    status: pr.merged ? 'MERGED' : 'CLOSED',
    filesChanged: prDetails.changedFiles,
    additions: prDetails.additions,
    deletions: prDetails.deletions,
    analysisTime: (new Date(pr.closedAt) - new Date(pr.createdAt)) / (1000 * 60 * 60),
    descriptionLength: pr.body.length,
    participants: prDetails.participants.totalCount,
    comments: prDetails.comments.totalCount,
  };
}

// Função principal
async function main() {
  const repos = await getPopularRepositories();
  const csvWriter = createObjectCsvWriter({
    path: 'pull_requests_data.csv',
    header: [
      {id: 'repo', title: 'Repository'},
      {id: 'prNumber', title: 'PR Number'},
      {id: 'status', title: 'Status'},
      {id: 'filesChanged', title: 'Files Changed'},
      {id: 'additions', title: 'Additions'},
      {id: 'deletions', title: 'Deletions'},
      {id: 'analysisTime', title: 'Analysis Time (hours)'},
      {id: 'descriptionLength', title: 'Description Length'},
      {id: 'participants', title: 'Participants'},
      {id: 'comments', title: 'Comments'},
    ]
  });

  for (const repo of repos) {
    console.log(`Processing repository: ${repo.owner.login}/${repo.name}`);
    const prs = await getQualifiedPRs(repo);
    console.log(`Found ${prs.length} qualified PRs for ${repo.owner.login}/${repo.name}`);
    let count = 0;

    for (const pr of prs) {
      try {
        const prData = await getPRDetails(pr);
        await csvWriter.writeRecords([prData]);
        console.log(`Processed PR #${pr.number} for ${repo.owner.login}/${repo.name}`);
        count++;
        if(count === 100) {
          break;
        }
      } catch (error) {
        console.error(`Error processing PR #${pr.number} for ${repo.owner.login}/${repo.name}:`, error);
      }
    }
  }

  console.log('Data collection complete.');
}

// Executar o script apenas se for o arquivo principal
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error("An error occurred in the main function:", error);
  });
}