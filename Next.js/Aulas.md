# Next.js

## Aulas

### Aula 1 - Conhecendo o Next.js

O que é o Next.js?

- É um framework para construir aplicações full-stack
- Utiliza React como biblioteca para a interface (UI)
- Contem recursos que trazem otimizações e funcionalidades de backend.

Por que usar o Next ao invés de React + Vite?

- Maior produtividade, com muitos recursos necessários já inclusos e pré-configurador, como o roteador e o sistema de layouts
- Possui forma de otimizar o carregamento de imagens, fontes, scripts e outros recursos.
- Possibilidade trabalhar com os React Server Components com mais facilidade.
- Facilita a implementação e deploy ao trabalhar com a arquitetura de Backend For Frontend (BFF).
- Possibilita trabalhar com sites estáticos (SSG) e regeneração incremental (ISR) para reconstrução eficiente de páginas estáticas que requerem dados dinâmicos.
- Facilita a utilização de recursos de internacionalização (i18n), acessibilidade, SEO, etc.

### Aula 2 - Principais recursos do Next.js

Renderização

- Suporte a renderização Client-side e Server-side.
- Geração de sites estáticos e dinâmicos, além de suporte a streaming de componentes.
  Roteamento
- Rotas baseadas no sistema de arquivos.
- Suporta rotas dinâmicas.
- Suporta os Server Components.
- Poderoso sistema de layouts.
- Rotas aninhadas, estados de carregamento, tratamento de erros, etc.
  Fetching de Dados
- Uso de Server Components para simplificar as requisições (componentes async)
- Método fecth otimizado para trabalhar com memorização, caching e revalidação.
  Otimizações
- Otimização automática de imagens, fontes, formulários e scripts, melhorando a pontuação de Core Web Vitals.
  Estilização
- Suporte a CSS Modules, Tailwind CSS, Sass, CSS-in-JS, etc.
- Vem pré-configurado com Tailwind CSS.
  TypeScript
- Suporte avançado com tipagem estática e verificação de tipos em tempo de desenvolvimento.

### Aula 3 - Primeiro projeto

Para inicializar um projeto Next.js, utilize o comando:

```bash
npx create-next-app@latest
```

O Next aceita diversas formas de estilização:

- CSS Modules
- Tailwind CSS ou Bootstrap
- Sass
- Radix UI
- etc

Os componentes do Next.js são por padrão Server Components, mas podem ser transformados em Client Components utilizando a diretiva 'use client' no topo do arquivo.
Algumas bibliotecas trabalham com JS imbutido, para conseguir usar esses recursos é necessário um client component.

Para otimizar imagens utilizamos um componente do Next chamado Image. Esse componente reserva o espaço da imagem no layout, para casos de conexão lenta não ter alterações após o carregamento, além de otimizar a qualidade da imagem.

É possível adicionar fontes locais e remotas ao projeto, podendo importar de um arquivo local e salvar como variável.
Para utilizar fontes personalizadas em conjunto com bibliotecas como RadixUi precisa configurar conforme a documentação da biblioteca.

### Aula 4 - Entendendo o roteamento no Next.js

O Next.js utiliza um sistema de roteamento baseado no sistema de arquivos. Para criar uma rota, basta criar um arquivo na pasta app.
Existem alguns arquivos especiais que podem ser criados dentro de uma rota para configurar o layout, carregamento e tratamento de erros:

- layout.tsx: Define o layout da rota.
- page.tsx: Define a página da rota.
- loading.tsx: Define o estado de carregamento da rota.
- error.tsx: Define o tratamento de erros da rota.
- template.tsx: Define o template da rota.
- not-found.tsx: Define a página de não encontrada da rota.
- default.tsx: Define a página de não encontrada da rota.

Para rotas aninhadas, basta criar uma pasta dentro da pasta app. Por exemplo, para criar uma rota aninhada em /dashboard, basta criar uma pasta chamada dashboard dentro da pasta app. Lembrando que dentro de cada diretório deve haver um arquivo page.tsx para que a rota seja renderizada.

Para rotas dinâmicas, basta criar uma pasta dentro da pasta app com colchetes, por exemplo, [id].tsx.

O arquivo layout define um layout para todas as rotas subsequentes, ou seja, para todas as rotas que estão dentro da pasta onde o arquivo layout está localizado. Por exemplo, se o arquivo layout estiver localizado na pasta app, ele definirá um layout para todas as rotas do projeto. Se o arquivo layout estiver localizado na pasta app/dashboard, ele definirá um layout apenas para as rotas que estão dentro da pasta app/dashboard.

Pastas que estão com o nome entre parênteses não precisam ser referênciadas na url. Exemplo: app/(site)/blog/page.tsx -> /blog

O Next tem componentes Link embutidos no framework, para fazer a navegação client-side.

Layouts e templates são diferentes. O layout é renderizado uma única vez, enquanto estiver na mesma rota ou em rotas filhas. O template é renderizado toda vez que a rota é acessada, mas em caso de rotas que estão no mesmo nível, o template não é renderizado novamente.
