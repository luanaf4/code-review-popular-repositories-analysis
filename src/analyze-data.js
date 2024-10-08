import fs from 'fs';
import { parse } from 'csv-parse';
import { stringify } from 'csv-stringify';
import * as ss from 'simple-statistics';

// calcular a correlação de Pearson
function calculateCorrelation(x, y) {
    return ss.sampleCorrelation(x, y);
}

// calcular estatísticas descritivas
function calculateDescriptiveStats(data) {
    return {
        mean: ss.mean(data),
        median: ss.median(data),
        min: Math.min(...data),
        max: Math.max(...data),
        standardDeviation: ss.standardDeviation(data)
    };
}


async function analyzeData() {
    
    const data = await new Promise((resolve, reject) => {
        fs.readFile('pull_requests_data.csv', (err, fileData) => {
            if (err) {
                reject(err);
                return;
            }
            parse(fileData, { columns: true, cast: true }, (err, records) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(records);
            });
        });
    });

    // Lista de métricas para analisar
    const metrics = [
        { key: 'Files Changed', name: 'Files Changed' },
        { key: 'Additions', name: 'Additions' },
        { key: 'Deletions', name: 'Deletions' },
        { key: 'Analysis Time (hours)', name: 'Analysis Time' },
        { key: 'Description Length', name: 'Description Length' },
        { key: 'Participants', name: 'Number of Participants' },
        { key: 'Comments', name: 'Number of Comments' }
    ];

    // Calcular correlações e estatísticas descritivas
    const results = metrics.map(metric => {
        const metricData = data.map(row => parseFloat(row[metric.key]));
        const statusData = data.map(row => row.Status === 'MERGED' ? 1 : 0);
        const reviewsData = data.map(row => parseFloat(row.Participants));

        return {
            metric: metric.name,
            correlationWithStatus: calculateCorrelation(metricData, statusData),
            correlationWithReviews: calculateCorrelation(metricData, reviewsData),
            ...calculateDescriptiveStats(metricData)
        };
    });

    // Armazena os dados em um csv
    const csvStringifier = stringify({ header: true });
    const writeStream = fs.createWriteStream('analysis_results.csv');
    csvStringifier.pipe(writeStream);

    results.forEach(result => csvStringifier.write(result));
    csvStringifier.end();

    console.log("Análise concluída. Resultados salvos em 'analysis_results.csv'.");
}

analyzeData().catch(error => {
    console.error("Ocorreu um erro durante a análise:", error);
});