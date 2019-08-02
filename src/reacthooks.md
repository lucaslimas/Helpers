[Voltar](/Readme.md)

# React Hooks

Com o react hooks, não existe a necessidade da criação de classes para os componentes, pois o estado do componente será armazenado de outra forma, usando o react hooks.

```js
import React, { useState, useEffect } from "react";
```

## useState

Como o componente não tem a necessidade de ser uma classe, não usamos o state no componente, usamos o useState para criar uma propriedade do estado do componente. No momento da declaração do estado, passamos a variavel e o método que deve ser usado para alterar o valor nessa variável, diferentemente do state da classe que usamos o setState, no useState definimos uma função pra cada propriedade.

Veja o exemplo de como criar um estado para armazenar um contador:

```js
const [counter, setCounter] = useState(0);
```

Repare que é feito uma desestruturação no retorno do método **useState** que retorna um array, onde o primeiro elemento é variável que deseja armazenar o valor passado pelo método **useState**, onde no exemplo é zero o valor inicial, e o segundo elemento é um **dispatcher**, ou seja, um função que será usada para mudar o valor do estado.

## useEffect

O useEffect é usado basicamente para controlar o ciclo de vida do componente, assim como na classe era utilizado o **componentDidMount**, **componentWillUnmount** e etc, com o hooks isso é controlado de outra forma, usando a função **useEffect**.

UseEffect recebe dois parâmetros, o primeiro é uma função e o segundo é um array de dependência.

> No componente pode ser utilizado quantos useEffect desejar.

Primeiro parâmetro é a função que desejamos executar e o segundo parâmetro seria quando desejamos executar essa função, ou seja, na alteração de qual propriedade essa função deve ser executada novamente.

Caso necessite que a função seja executada uma única vez, assim como o **componentDidMount**, devemos deixar o segundo parâmetro vazio, dessa forma a função será executada uma única vez.

```js
useEffect(() => {
  console.log("componentDidMount");
}, []);
```

Para executar a função sempre que alguma propriedade mudar basta inclui-lá no array. Parecido com o **ComponentDidUpdate**

```js
useEffect(() => {
  console.log(`Alterou o contador ${counter}`);
}, [counter]);
```

Para executar o função quando desmontar o componente, basta informar um retorno para o useEffect, dessa forma ele identifica que existe um retorno e isso será usado como o **componentWillUnmount**.

```js
useEffect(() => {
  return () => {
    console.log("componentWillUnmount");
  };
}, [counter]);
```
