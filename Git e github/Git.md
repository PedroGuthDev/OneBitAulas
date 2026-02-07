## Aula 1. Conhecendo o git

Git é um software livre e open-source para controle de versão, ajuda a ter um histórico de alterações do software
podendo reverter para versões anteriores se necessário
O git monitora cada modificação feita no arquivo e gera um histórico do que foi modificado. Essas alterações podem
ser salvas em versões, exemplo 1.0.1, 1.0.2, ...
Termos fundamentais:

1. Repositório: é a forma como se refere ao projeto como um todo, a partir de onde serão monitoradas as alterações.
2. Commit: é o ato de salvar as alterações no código.
3. Working tree: é o espaço onde você faz as alterações, ele registra aonde está sendo modificado.
4. Staging: preparação de quais alterações serão salvas no Commit.
5. Branches: são ramificações que são criadas a partir de um ponto específico do projeto, permitindo trabalhar em cima de uma cópia do projeto principal, sem afetar o original. Todo Repositório tem uma ramificação principal,geralmente chama de Main ou Master.

## Aula 2. Fluxo de trabalho usando Git, comandos principais

1- Para começar, inicializamos um novo diretório a partir de uma pasta
2- Em seguida começamos a modificar o conteúdo do diretório, essas modificações são temporárias no diretório,
só serão salvas ao realizar o Commit
3- Para salvar as modificações, é necessário adicionar elas na área de preparação
4- Depois de escolher o que será salvo, é realizado o Commit
5- Assim é criado a primeira versão, e posteriormente pode ser repetido desde o passo 2 para fazer mais versões

Abrir o git bash no diretório
Comandos: git init: inicializa o Repositório

1. git status: exibe o status dos arquivos do diretório.
2. git add "arquivo": adiciona o arquivo para a área de preparação.
3. git rm --chached "arquivo: remove o arquivo da área de preparação/monitoramento.
4. git add . : adiciona todas as modificações a área de preparação.
5. git commit -m "mensagem" : comita o arquivo com um nome e deixa uma mensagem descrevendo o que foi alterado, qual funcionalidade foi adicionada, etc... Para trabalho em equipe é importante ter essa mensagem e documentação.
6. git config --global user.email "seuEmail" : configura o git para relacionar as mudanças a sua conta.
7. git config --global user.name "seuNome: configura o git para relacionar as mudanças a sua conta.
8. git log : mostra o histórico de commits do Repositório, com quem fez, a data, o id do commit e a mensagem passada.
9. git diff : mostras as alterações pendentes de commit, relacionando o arquivo Master ao que está sendo alterado agora.
10. git restore : reverte as alterações feitas no arquivo para algum commit anterior.

## Aula 3. Boas práticas e dicas

1. Nomeie seus commits com cuidado, deixe mensagens de commit bem escritas para entender o que foi alterado e por quê, claras,objetivas e geralmente seguindo um padrão escolhido pela equipe.
2. Revise muito bem as mudanças antes de commitar, ajuda a evitar commits incompletos ou com bugs, use o git diff para ver asmudanças que serão comitadas e o git status para ver os arquivos.
3. Faça commits pequenos e frequentes, são mais fáceis de revisar, de nomear e explicar em mensagem.
4. Tipos de versão semântica:
   1. Major(versão principal): São mudanças que tem muitas modificações, podendo até quebrar compatibilidade com versões anteriores
   2. Minor(versão secundária): versão que adiciona melhorias e correções
   3. Patch(correção de bugs): versão focada em correção de bugs e pequenas melhorias

## Aula 4. Entendendo as Branches

Branches são ramificações que permitem trabalhar diferentes linhas de desenvolvimento de um repositório, cada branch vai ter seus
commits independentes, sem afetar o código fonte da aplicação
Elas são usadas para poder trabalhar em pararelo diferentes pessoas no mesmo código, também ajudam a organizar o histório de
desenvolvimento
Branch principal: normalmente chamada de "main" ou "master". É a linha principal de desenvolvimento, onde o código mais estável é
mantido.
Branch de funcionalidade: usada para desenvolver uma nova funcionalidade ou melhoria, criada a partir da brancha principal, e Depois
reintegradas a branch principal.
Branch de correção: similar a de funcionalidade, porém utilizada para corrigir bugs ou funcionalidades da brancha principal.
Para trabalhar com branch:

1. git branch nome-da-branch é o comando do git que cria uma branch
2. git checkout nome-da-branch pode mudar para uma branch diferentes / se for usado git checkout -b é criado uma nova branch e mudado
   em um único comando
3. para integrar as mudanças é utilizado o comando git merge nome-da-branch

## Aula 5. Resolvendo conflitos de merge

Por ser geralmente usado por mais de uma pessoa, podem ter alterações de duas pessoas no mesmo trecho de código ou arquivo
Para resolver um conflito, primeiro identificamos o arquivo em conflito, com ajuda do terminal, depois editamos da forma que queremos
manter entre os dois commits.
Depois de resolvidos, adicionamos os arquivos e fazemos um commit
É possível também usar o comando git merge --abort para cancelar o merge
Existem ferramentas que auxiliam a resolver conflitos de merge de maneira mais intuitiva
Como evitar conflitos:

1. Comunicação entre os desenvolvedores, para evitar que trabalhem na mesma linha do código
2. Pull frequente: manter sempre a sua branch atualizada com o código principal, antes de commitar puxe novamente a branch principalpara verificar se não tem algum conflito
3. Commits frequentes e pequenos. Logo ao mexer em uma parte do código já commitar para o principal vai reduzir o risco de conflito.

## Aula 6. Repositórios remotos e GitHub

Repositórios remotos são arquivos que ficam em nuvem, possibilidando outros desenvolvedores pegarem para trabalhar e depois
comitarem suas alterações salvando nesse repositório remotos
GitHub é um site que serve para criar esses repositórios e adiciona algumas funcionalidades extras que facilitam o trabalho
em equipe.
Para trazer um repositório da nuvem para o seu computador:

1. git clone url-do-repositorio
2. git push nome-do-remote nome-da-branch (para enviar suas alterações para o repositório remoto)
3. uma vez clonado, para obter novamente o repositório atualizado utiliza-se o git pull nome-do-remote

## Aula 7. Usando SSH e repositórios remotos

Para adicionar o repositório via comando

1. git remote add origin "url https ou ssh do repositório".
   Para adicionar as mudanças ao repositório
2. git push -u nome-do-repositorio nome-da-branch, geralmente origin.

Para gerar uma chave SSH e utilizar:

1. Acesse o github, em configurações e ssh é possível gerenciar suas chaves.
2. Para adicionar uma nova chave, abra algum terminal que tenha agente ssh e digite: ssh-keygen -C "seu-email".
3. Feito isso adicione a chave publica no site do git.
4. Adicione sua chave privada ao ssh-agent com o comando: ssh-add caminho-da-chave

Para clonar um repositório:

1. Dentro do repositório é possível pegar a url ssh do projeto.
2. Com a url é possivel clonar com o comando git clone url-do-repo nome-que-voce-quer-colocar-em-pasta

## Aula 8. Forks e como contribuir em projetos open-source
Fork é similar a uma branch, porém ele duplica o projeto criando uma cópia totalmente desvinculada da original.
É possível utilizar tanto para seguir um caminho separado do original quanto pra desenvolver e contribuir com o original. 
Ao fazer alterações no código, é possível solicitar um pull request para o projeto, integrando suas alterações ao repositório original.

## Aula 9. Usando o .gitignore
Dentro da pasta monitorada pelo git, podemos criar um arquivo .gitignore e passar arquivos específicos ou pastas do seu projeto para não serem upadas para o repositório

## Aula 10. Exemplo de fluxo de trabalho colaborativo
Cada equipe vai ter sua rotina e métodos, mas um exemplo é:
1. Clonar o repositório e fazer o setup inicial(configuração ou instalação de ferramentas/dependências do projeto).
2. Criar uma branch separada para trabalhar em alguma tarefa do projeto.
3. Mudar para a sua brancha e fazer as alterações.
4. Commitar suas alterações, de preferência a cada pequena alteração para documentar bem.
5. Após finalizar sua tarefa, abrir um Pull Request das suas alterações para a branch master.
6. O líder do projeto revisa seu código e aprova ou reprova as mudanças.
7. Retorna ao passo 2 para uma nova tarefa.
