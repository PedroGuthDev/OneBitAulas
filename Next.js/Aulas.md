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

Para otimizar imagens utilizamos um componente do Next chamado Image.