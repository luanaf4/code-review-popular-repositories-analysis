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

Correlação entre quantidade de arquivos alterados e status: -0.03199839047725217
Correlação entre adições e status: -0.015295793251350064
Correlação entre remoções e status: -0.0490288767845799

A correlação negativa mais fraca indica que quanto maior o tamanho de um PR, o feedback final da revisão tende a ser ligeiramente pior. Isso pode ser devido ao fato que PRs com uma quantidade considerável de alterações tendem a serem mais complexos, ou podem conter mais erros.

#### RQ 02. Qual a relação entre o tempo de análise dos PRs e o feedback final das revisões?

Correlação entre tempo de análise e status: -0.318765464046064

A correlação negativa mais fraca indica que quanto mais tempo leva para analisar um PR, o feedback final da revisão tende a ser ligeiramente pior. Isso pode ser devido ao fato de que PRs que levam mais tempo para analisar podem ser mais complexos ou problemáticos, levando a um feedback de revisão menos favorável.

#### RQ 03. Qual a relação entre a descrição dos PRs e o feedback final das revisões?

Correlação entre Description Length e Status: -0.01317531498702591

A correlação negativa mais fraca indica que quanto mais descritivos são os PRs, o feedback final da revisão tende a ser ligeiramente pior. Isso pode ser devido ao fato de que PRs com descrições mais longas, podem acabar sendo mais dificeis de entender ou mais complexos ao serem analisados.

#### RQ 04. Qual a relação entre as interações nos PRs e o feedback final das revisões?

Correlação entre número de participantes e status: -0.14740607946216477
Correlação entre número de comentários e status: -0.13896163975951017

Essas correlações negativas indicam que quanto mais interações os PRs possuem, o feedback final da revisão tende a ser ligeiramente pior. Isso pode ser devido ao fato que por conta de ocorrerem participações de diversos desenvolvedores paralelamente, pode acabar tornando algo mais complexo ou serem mais controversos, causando um feedback menos favorável.

### B. Número de Revisões:

#### RQ 05. Qual a relação entre o tamanho dos PRs e o número de revisões realizadas?

Correlação entre quantidade de arquivos alterados e revisão: 0.05001184749105775
Correlação entre adições e revisão: 0.09664850220745215
Correlação entre remoções e revisão: 0.1047572917566429

Essas correlações positivas, mesmo fracas, indicam que quanto maior o PR, o número de revisões tende a ser ligeiramente maior. Isso pode ser devido ao fato que PRs maiores, costumam a ter mais impacto e também serem mais complexos, ocasionando em um número maior de revisadores.

#### RQ 06. Qual a relação entre o tempo de análise dos PRs e o número de revisões realizadas?

Correlação entre tempo de análise e revisão: 0.12044149424057414

A correlação positiva moderada indica que PRs que levam mais tempo para serem analisados, tendem a ter um número ligeiramente maior de revisões. Isso pode indicar que PRs que tendem a ser mais impactantes e problemáticos, costumam demorar mais tempo para serem revisados.

#### RQ 07. Qual a relação entre a descrição dos PRs e o número de revisões realizadas?

Correlação entre comprimento de descrição e revisão: 0.06774972493460826

Essa correlação positiva indica que PRs que tendem a ser mais descritivos, tendem a ter um número ligeiramente maior de revisões. Isso pode ser devido ao fato que PRs mais descritivos costumam ser mais problemáticos e complexos, levando mais tempo para serem analisados.

#### RQ 08. Qual a relação entre as interações nos PRs e o número de revisões realizadas?

Correlação entre números de participações e revisão: 1
Correlação entre número de comentários e revisão: 0.7195406173220315

As fortes correlações positivas entre o número de participantes e comentários nos PRs e o número de revisões realizadas sugerem que, PRs com mais interações tendem a ter mais revisões, possivelmente porque ocorrem discussões mais complexas ou controvérsias, portanto requerem mais revisões.

## Conclusão

Os resultados obtidos nesta análise fornecem insights significativos sobre a caracterização das atividades de code review em repositórios populares do GitHub. Os dados sugerem que o tamanho dos PRs, o tempo de análise, a descrição dos PRs e as interações nos PRs estão todos relacionados ao feedback final das revisões e ao número de revisões realizadas de maneiras interessantes.

Contrariando algumas das hipóteses iniciais, foi descoberto que PRs maiores e aqueles que levam mais tempo para serem analisados tendem a receber feedback final pior. Isso sugere que esses PRs podem ser mais difíceis de revisar e podem conter mais problemas. Além disso, PRs com descrições mais longas e mais interações também tendem a ter feedback final pior. Isso pode ser porque são mais complexos ou controversos.

Em contraste, apesar do feedback final pior, PRs maiores, aqueles que levam mais tempo para serem analisados, aqueles com descrições mais longas e aqueles com mais interações tendem a receber mais revisões. Isso pode ser um reflexo do esforço para resolver os problemas e discussões nesses PRs.

No entanto, é importante ressaltar que esses resultados são correlações e não implicam necessariamente causalidade. Além disso, o processo de revisão de código é complexo e pode ser influenciado por uma variedade de fatores não considerados nesta análise.
