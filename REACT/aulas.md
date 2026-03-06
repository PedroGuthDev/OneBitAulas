# Aula 1. O que é React.

React é uma biblioteca para criação de interfaces, desenvolvida pelo Facebook.
As interfaces são construídas a partir de pequenos blocos chamados componentes.
Foi criado para trabalhar com interatividade e reutilização de código.

## Por que usar React e não apenas Javascript?

React é mais simples, produtivo, manutenível e escalável.

# Aula 2. O que é o Virtual DOM?

O Virtual DOM foi criado para resolver o problema de atualização de interfaces.
Se trata de uma cópia virtual do DOM onde fazemos as alterações, depois o React compara as duas e atualiza apenas o que foi modificado.

# Aula 3. JSX

JSX é uma extensão da linguagem Javascript que permite a criação de interfaces.
É o formato de arquivo usado para criar componentes React.
Não é entendido pelo navegador, é necessário compilar para Javascript.

# Aula 4. Componentes

Componentes são pequenos blocos que compõem uma interface.
Diferente do HTML tradicional, onde escrevemos a página inteira em um arquivo, no React escrevemos em componentes que definem blocos da página que podem ser reutilizados.
Vantagens:

1. Podem ser escritos e reutilizados.
2. Tornam o processo de modificar uma parte específica da interface de uma maneira muito mais fácil.
3. Deixa a estrutura mais organizada, com cada arquivo repsonsável por uma parte da página.

# Aula 5. Vite

O vite é muito usado no ecossistema React para criar projetos.
Pelo React não ser lido em forma base, o vite compila o código para JS e o executa no navegador, criando um servidor local para desenvolvimento.

# Aula 6. Dados dinâmicos no JSX

No JSX podemos usar variáveis e expressões Javascript para criar dados dinâmicos.

Exemplo:

```javascript
const name = "Paulo";
const element = <h1>Olá, {name}!</h1>;
```

Não é possível usar estruturas de repetição ou condicionais no JSX, apenas expressões, no caso de if podemos utilizar o operador ternário.

Exemplo:

```javascript
const status = true;
const element = <h1>Status: {status ? "Active" : "Inactive"}</h1>;
```

# Aula 7. Criação de componentes e reutilização

Componentes são blocos de código que podem ser reutilizados.

Exemplo:

```javascript
function Title() {
  return <h1>Olá {tech}</h1>;
}
```

Componentes precisam ter a primeira letra maiúscula.
Geralmente é criado um componente por arquivo tsx ou jsx.

## Organização de componentes

É uma boa prática organizar os componentes em pastas, geralmente dentro de uma pasta "Components".
É possível organizar tanto em componentes separados com o NomeDoComponente.tsx ou em pastas com o NomeDoComponente/index.tsx.

Exemplo:

```
src/
├── Components/
│   ├── Title/
│   │   ├── index.tsx
│   ├── Subtitle.tsx
│   └── StatusText.tsx
└── App.tsx
```

## Estilização de componentes

É possível estilizar componentes de diversas formas, como inline, usando CSS puro, CSS modules, ou bibliotecas como Tailwind CSS.

Exemplo inline:

```javascript
<h1
  style={{
    color: "#e5e5e5",
  }}
>
  {tech} is awesome!
</h1>
```

Exemplo de css modules:

```javascript
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}
```

# Aula 8. Fragment

Existe um componente chamado Fragment que permite que retornemos mais de um elemento do componente sem adicionar um elemento extra ao DOM.

Exemplo:

```javascript
function Title() {
  return (
    <>
      <h1>Olá {tech}</h1>
      <p>Este é um exemplo de componente</p>
    </>
  );
}
```

# Aula 9. Props

Props são propriedades que passamos para os componentes.
Quaisquer propriedades declaradas na tag do componente serão recebidas pelo componente como um objeto.

Exemplo:

```javascript
//Componente
function Title(props) {
  return <h1>Olá {props.tech}</h1>;
}

//App
export default function App() {
  return (
    <div>
      <Title tech="React" />
    </div>
  );
}
```

# Aula 10. Children

Children é uma propriedade que permite que adicionemos elementos dentro de um componente.

Exemplo:

```javascript
//Componente
function Title({ children }) {
  return (
    <>
      <h1>Olá </h1>
      {children}
    </>
  );
}

//App
export default function App() {
  return (
    <div>
      <Title>
        <p>React</p>
      </Title>
    </div>
  );
}

//Resultado:
//<h1>Olá</h1>
//<p>React</p>
```

# Aula 11. Hooks

Regras:
  1. Só podem ser chamados dentro de componentes React.
  2. Só podem ser chamados no nível mais alto do componente (não podem ser chamados dentro de condicionais ou loops).

## useState

O useState é um hook que permite que um componente mantenha informações sobre si mesmo e atualize a interface quando essa informação mudar.

Exemplo:

```javascript
function Title() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  );
}
```

É possível criar hooks personalizados, 