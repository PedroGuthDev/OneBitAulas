# Aula 1. Conhecendo o flexbox

Flexbox é um dos possíveis valores da propriedade display, é usado para criar layouts flexiveis e responsivos, foi projetado para lidar com o posicionamento e alinhamento, facilitando alinhar elementos, dristribuir o espaço de tela, organizar, etc.
Conceitos básicos:

1. "Flex container": elemento que usa o display flex, ele engloba os itens que serão organizados.
2. "Flex items": são os elementos que estão dentro do conteinar, são organizados pelo Flexbox
3. Eixo principal: direçõa na qual os itens serão distribuidos, padrão: horizontal, da esquerda para direita
4. Eixo perpendicular: direção perpendicular a principal (90°), usado para alinhar os itens, padrão: vertical, de cima pra baixo

# Aula 2. Principais propriedades do flex

1.  flex-direction: altera a direção dos itens do container
2.  justify-content: altera o alinhamento dos itens dentro do espaço disponível
3.  Align-items: alinha os itens de acordo com o eixo perpendicular do conteiner.

# Aula 3. Propriedades dos items flex

1. flex-grow: valor padrão 0, altera o valor de crescimento em proporção aos demais items flex. Por exemplo o valor 8 torna o item 8 vezes maior que o menor item do flex
2. flex-shrink: valor padrão 1, altera o valor de encolhimento em telas menores, quanto menor o valor menos o elemento encolhe, se o valor for 0 ele não encolhe nada.
3. flex-basis: define um tamanho base para o elemento
4. flex: essa propriedade engloba as outras 3, nessa mesma ordem de atribuição de valores.
   Todas essas propriedades são relacionadas ao eixo do container.

# Aula 4. Trabalhando a responsividade com flex-wrap

A propriedade flex-wrap ajuda a trabalhar com responsividade, quebrando os elementos por linha, ajustando para sempre caberem na largura da tela, respeitando a configuração de crescimento, encolhimento e tamanho base de cada item.

# Aula 5. Conhecendo o grid

Assim como o flex, é um dos valores do display, permite dividir a área em grade, com linhas e colunas. O flex geralmente é usando para distribuir os itens em uma dimensão(linha ou coluna) e o grid é feito para trabalhar com ambos.
Principais conceitos:

1. Grid container: elemento pai que contém os itens da grade.
2. Grid Items: elementos filho dentro do container.
3. Colunas e linhas: usados para distribuir e calcular o posicionamento dos itens, sendo possível indicar a coluna e linha que um item começa e termina.

# Aula 6. Principais propriedades

1.  O alinhamento inicial do grid é em coluna.
2.  A principal forma de trabalhar com grid é configurando cada item individualmente.
3.  O grid sabe quantas colunas tem analizando a maior coluna possível de acordo com a configuração dos itens.
4.  Ao passar grid-colum ou row como 1/4 o item ocupa da posição 1 até a 3 (o 4 é excludente).
5.  Se tiver itens conflitantes no grid, o item que é renderizado depois na ordem vai sobrepor o item anterior

# Aula 7. Grid template

As propriedades grid-template-colums e rows servem para definir a quantidade e o tamanho de colunas e linhas previamente, possibilitando maior flexibilidade sem ajuste manual em cada item do grid.
Para que um item ocupe quantas colunas você quiser, ao invés de declarar x/y pode se declarar span x, onde x é o número de colunas que o item vai ocupar.
É possível usar uma fração para definir o espaço que a coluna/linha vai ocupar na declaração do template, usando o fr: 1fr 2fr 3fr...
Quando tiver valores de fração repetidos, é possível usar o repeat() para repetir um valor com os parâmetros (vezes, valor)
Pode ser declarado também com o minmax(tamanho mínimo, máximo), para definir coluna a coluna ou linha a linha o tamanho mínimo e máximo de cada item que vai ocupar

# Aula 8. Alinhamento no grid

Ao utilizar o justify content no grid, ele comprime o conteúdo até o mínimo. O align-content alinha o grid como um todo, é mais utilizado que o align items.
1.justify-items: Alinha os itens dentro de suas áreas no eixo horizontal (start, end, center,stretch).
2.align-items: Alinha os itens dentro de suas áreas no eixo vertical.
3.justify-content: Alinha todo o grid no eixo horizontal.
4.align-content: Alinha todo o grid no eixo vertical.
5.place-items: Combina justify-items e align-items em uma única propriedade.

# Aula 9. Áreas do grid

A propriedade grid-template-areas, serve para identificarmos areas nomeadas no grid, facilitando a personalização do layout.

```bash
Exemplo:   grid-template-areas:
    "cabecalho cabecalho cabecalho cabecalho"
    "sidebar   conteudo  conteudo  conteudo"
    "sidebar   conteudo  conteudo  conteudo"
    "rodape    rodape    rodape    rodape";
```
Precisa ser trabalhado com a mesma quantidades de colunas em cada linha, caso contrário não funciona.