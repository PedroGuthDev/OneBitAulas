# Aula 1. Conhecendo o Bootstrap

## O que é o Bootstrap?

É um framework de CSS com um pouco de JS e serve para agilizar o desenvolvimento frontend, fornecendo componentes prontos para utilização

## Por que usar o Bootstrap?

1. Aumenta muito a produtividade, permitindo desenvolver rapidamente interfaces responsivas
2. Possui um sistema de grade próprio, similar ao display:grid
3. Não requer conhecimento aprofundado em CSS, por ter diversos recursos prontos
4. Pode ser usado de forma eficiente, customizada e modular através do SASS.
5. É flexível e pode ser usado em praticamente qualquer cenário de desenvolvimento frontend, mesmo com frameworks como React ou Vue
6. É estável e ativamente atualizado há mais de 10 anos.

## Será que ainda vale a pena?

Depende do tipo de projeto, existe o TailwindCSS que também é muito usado.
Se não for customizado corretamente, o uso do Bootstrap vai resultar em uma UI genérica.
Os frameworks de JS, como React e Vue, possuem seus próprios métodos e bibliotecas que se integram bem ao Bootstrap.

## Materiais complementares

1. http://getbootstrapt.com/
2. https://getbootstrap.com/docs/

# Aula 2. Instalações

## Instalação via CDN

Existem os refs no site do bootstrap para colar no html, importando todos os recursos do Bootstrap para a página, porém não é muito recomendado porque pesa no carregamento do site.

## Instalação via webpack

```bash
npm -init -y
npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
npm i --save bootstrap @popperjs/core
npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader
```

### Configuração

### Criar um arquivo webpack.config.js

```bash


'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}


```

### Crie scripts para rodar o webpack

```bash


{
  // ...
  "scripts": {
    "start": "webpack serve",
    "build": "webpack build --mode=production"
  },
  // ...
}


```

### Configure na sua pasta src uma pasta scss com um arquivo style.scss

```bash

@use "bootstrap/scss/boostrap.scss";

```

### Configure o arquivo main.js

```bash

import "../scss/style.scss";

```

### Configure o uso dos loaders no webpack.config.js

```bash
  const autoprefixer = require("autoprefixer")

  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
            options: {
              sassOptions: {
                // Optional: Silence Sass deprecation warnings. See note below.
                silenceDeprecations: [
                  "mixed-decls",
                  "color-functions",
                  "global-builtin",
                  "import",
                ],
              },
            },
          },
        ],
      },
    ],
  },


```

# Instalação via Vite

## Instalação

```bash
npm init -y
npm i --save-dev vite
npm i --save bootstrap @popperjs/core
npm i --save-dev sass
```

## Configuração

### Configurar o Vite com o arquivo vite.config.js

```bash


import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
}


```

### Configurar o script

```bash


{
  // ...
  "scripts": {
    "start": "vite"
  },
  // ...
}


```

### Iniciar o vite

```bash
npm start
```

# Aula 3. Classes auxiliares do bootstrap

1. mt, mb, ms e me controlam as margens, syntax; mt-x onde x é o tamanho. Padding é igual, porém pt, pb...
2. min-vh-100 altera o elemento para ocupar toda a viewport
3. text-center/end/start alinha o texto horizontalmente
4. classes container criam containers responsivos. container-fluid ajusta o elemento para ocupar todo o espaço width disponível
5. classes de cor: primary, secundary, success, danger, warning, info, light and dark
6. border: border-0 até 5, border-rounded, etc
7. data-bs-theme: dark ou light altera o tema geral da página instantaneamente.
8. opacity-0~100 altera a opacidade do elemento
9. fs de 1 a 6 altera o tamanho da fonte. fw se refere a font weight
10. o d-flex ou d-grid aplica o display grid ao elemento, possibilitando o uso de classes como justify-content-between
11. Existem classes para responsividade, exemplo d-md-none d é display, md é o tamanho da tela e depois o display que vai ser aplicado, nesse caso o elemento desaparece

# Aula 4. Customizando o bootstrap com o sass
