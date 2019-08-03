[Voltar](/Readme.md)

# Componentes

Componente é um trecho de código criado que possibilita a reutilização em diversas partes da aplicação. Basicamente tudo que é feito em React ou React Native, pode se entender sendo um componente, pois react é feito pra ser componentizado.

Sempre que conseguimos imaginar o objeto da tela de uma forma separada, isso pode ser feito um componente.

Quando criamos um botão em tela, o botão pode ser um componente ou quando criamos um cabeçalho, rodapé ou um menu, todas esses objetos pode se entender sendo um componente, porém, vai muito além desses exemplos.

# Tipos de Componentes

Existem 3 tipos de componentes - StateFull, Stateless e Functional - e entender como cada um funciona é essencial para um bom planejamento da aplicação.

## StateFull

StateFull é um componente criado em forma de classe, que nos permite armazenar informações do componente dentro do que chamamos de **State** (Estado do componente) e também permite ter acesso a informações referente a seu ciclo de vida.

### Estado do Componente

Estado do componente podemos entender sendo variáveis onde guardamos informações do componente.

### Ciclo de Vida

Ciclo de vida são funções que são executadas em certos momentos do componente como por exemplo, antes de montagem do componente, depois da montagem, na desmontagem do componente, na atualização de algum estado, verificar se deve ser executado a atualização do componente, etc.

Referência [ReactJS.org](https://reactjs.org/docs/state-and-lifecycle.html)

### Exemplo

```js
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Dummy extends Component {
  state = {
    count: 1
  };

  componentDidMount() {
    console.log("Montagem do componente");
    this.setState({
      count: 10
    });
  }

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}
```

## Stateless

Usamos esse tipo de componente quando não necessitamos ter um estado no componente, apenas informações de exibições;

### Exemplo

```js
import React from "react";
import { View, Text } from "react-native";

const dummy = () => (
  <View>
    <Text>Test</Text>
  </View>
);

export default dummy;
```

## FunctionalComponent

Functional é um componente criado em forma de função, com uma codificação menos verbosa. É uma sintaxe mais nova para criação de componentes.

A forma de armazenar informações do componente é feita de outra forma, ele não usa estado, pois ele é uma classe, para isso usamos o **useState**.

### Exemplo

```js
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function dummy() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Montagem do componente");
    setCount(10);
  }, []);

  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
}
```

Para mais informações sobre componentes funcionais, veja [React Hooks](/src/reacthooks.md).

# Snippets

Para agilizar o processo de desenvolvimento, usar os [snippets da rockectseat](https://github.com/Rocketseat/rocketseat-vscode-react-native-snippets#sobre-o-projeto).

Adicionar as extensões da **Rocketseat**
