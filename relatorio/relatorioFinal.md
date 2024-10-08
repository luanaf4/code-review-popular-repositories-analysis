# Relatório Final

## Objetivo
O objetivo deste laboratório é analisar a atividade de code review
desenvolvida em repositórios populares do GitHub, identificando variáveis que
influenciam no merge de um PR, sob a perspectiva de desenvolvedores que submetem
código aos repositórios selecionados.

## Introdução

Este relatório apresenta uma análise das atividades de code review em repositórios populares do GitHub, focando nas práticas e dinâmicas que influenciam o processo de merge de Pull Requests (PRs). Com o crescimento exponencial da colaboração em projetos de software, a revisão de código tornou-se uma etapa crítica, não apenas para garantir a qualidade do código, mas também para promover a troca de conhecimentos entre desenvolvedores. Através de uma abordagem qualitativa e quantitativa, este estudo busca identificar as variáveis que impactam a aceitação de um PR, considerando a perspectiva dos desenvolvedores que submetem suas contribuições.

## Hipóteses iniciais 

### A. Feedback Final das Revisões (Status do PR):

#### RQ 01. Qual a relação entre o tamanho dos PRs e o feedback final das revisões?
    _PRs maiores tendem a receber mais comentários e revisões, o que pode influenciar no feedback final.
#### RQ 02. Qual a relação entre o tempo de análise dos PRs e o feedback final das revisões?
    _PRs que são analisados mais rapidamente tendem a ter um feedback final mais positivo.
#### RQ 03. Qual a relação entre a descrição dos PRs e o feedback final das revisões?
    _PRs com descrições mais detalhadas tendem a ter um feedback final mais positivo.
#### RQ 04. Qual a relação entre as interações nos PRs e o feedback final das revisões?
    _PRs com mais interações entre revisores e autores tendem a ter um feedback final mais positivo.

### B. Número de Revisões:

#### RQ 05. Qual a relação entre o tamanho dos PRs e o número de revisões realizadas?
    _PRs maiores tendem a receber mais revisões, devido à sua complexidade e impacto no código.
#### RQ 06. Qual a relação entre o tempo de análise dos PRs e o número de revisões realizadas?
    _PRs que são analisados mais rapidamente tendem a ter menos revisões, devido à agilidade no processo de revisão.
#### RQ 07. Qual a relação entre a descrição dos PRs e o número de revisões realizadas?
    _PRs com descrições mais detalhadas tendem a receber mais revisões, devido à clareza e compreensão do código.
#### RQ 08. Qual a relação entre as interações nos PRs e o número de revisões realizadas?
    _PRs com mais interações entre revisores e autores tendem a receber mais revisões, devido à comunicação efetiva.

## Metodologia

Foram coletados dados até 100 PRs de pelo menos 200 repositorios com mais de 1000 estrelas no github. Os dados foram coletados utilizando GraphQL e a API do GitHub. Os dados coletados incluem informações sobre os PRs, como tamanho, tempo de análise, descrição, interações, feedback final e número de revisões. Os dados foram armazenados em um arquivo CSV para análise. Na análise foram calculadas análises descritivas e correlações entre as variáveis coletadas. Para cada métrica é calculada a correlação com o status dos PRs (se foram mesclados ou não) e com o número de participantes, além de estatísticas como média e desvio padrão. 

#### As métricas coletadas foram:
Repository : Nome do repositório
PR Number: Número do PR
Status : Status do PR (merged ou not merged)
Files Changed : Número de arquivos alterados
Additions : Número de adições
Deletions  : Número de remoções
Analysis Time (hours) : Tempo de análise em horas
Description Length : Tamanho da descrição
Participants : Número de participantes
Comments : Número de comentários

## Resultados Obtidos

### A. Feedback Final das Revisões (Status do PR):

#### RQ 01. Qual a relação entre o tamanho dos PRs e o feedback final das revisões?


#### RQ 02. Qual a relação entre o tempo de análise dos PRs e o feedback final das revisões?


#### RQ 03. Qual a relação entre a descrição dos PRs e o feedback final das revisões?

#### RQ 04. Qual a relação entre as interações nos PRs e o feedback final das revisões?

### B. Número de Revisões:

#### RQ 05. Qual a relação entre o tamanho dos PRs e o número de revisões realizadas?

#### RQ 06. Qual a relação entre o tempo de análise dos PRs e o número de revisões realizadas?

#### RQ 07. Qual a relação entre a descrição dos PRs e o número de revisões realizadas?

#### RQ 08. Qual a relação entre as interações nos PRs e o número de revisões realizadas?


## Conclusão