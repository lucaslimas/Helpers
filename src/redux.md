[Voltar](/Readme.md)

# Redux

O Redux é um controlador de estados geral da aplicação. Permite compartilhar estados da aplicação entre os diversos componentes, msm não estando diretamente conectados.

O Redux é basicamente divido em 3 partes: actions, reducers e store.

## Actions

Actions são os disparadores de eventos de solicitação ou alterando alguma informação do store global, que são interpretado pelos reducers. Sáo funções responsáveis de enviar dados aos Reducers.

## Reducers

Reducers são responsáveis pelo recebimento de eventos (solicitadas pelas actions) para realizar alteração das informações contidas no store global que antes eram feitas com a função **setState** do próprio component;

Basicamente temos um reducer para cada propriedade que queremos compartilhar na aplicação. Por exemplo, no nosso estado global queremos quardar dados do usuário e uma lista de tarefas, nesse caso teremos um reducer para tratar cada estado, um userReducer e um toDoReducer.

## Store

Armazena os estados globais da aplicação.

# Configurando Redux

Instalar os pacotes Redux e o React-Redux

```
yarn add redux react-redux
```

## Criando Action

- Criar o arquivo **authentication.js** na pasta **src/store/actions**

```js
export const loginSuccess = user => ({
  type: "LOGIN_SUCCESS",
  payload: {
    user
  }
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE"
});
```

## Criando Reducer

- Criar o arquivo **authentication.js** na pasta **src/store/reducers**;

```js
const INITIAL_STATE = {
  user: null,
  error: false
};

export default function authentication(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user,
        error: false
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
}
```

- Criar o arquivo **index.js** na pasta **reducers** para centralizar todos os reducers;

```js
import { combineReducers } from "redux";

import authentication from "./authentication";

export default combineReducers({
  authentication
});
```

## Criando o Store Global

- Criar o arquivo **index.js** dentro da pasta **store** para vincular os reducers na aplicação;

```js
import { createStore } from "redux";

import reducers from "./reducers";

const store = createStore(reducers);

export default store;
```

No arquivo principal da aplicação (**app.js**), é necessário disponibilizar o store global criado anteriormente para toda aplicação.

Importar o **Provider** do **react-redux** e o store criado.

Adicionar a Tag Provider sobre todo o código da aplicação

```js
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <View />
  </Provider>
);

export default App;
```

Caso queira verificar se está configurado corretamente, adicione a seguinte linha após o **createStore(reducers)**

```js
console.log(store.getState());
```

## Aplicando o redux

Nesse momento todo o store global está sendo compartilhado com a aplicação e para consumir os dados do store existem duas formas, com o próprio **react-redux** e a outra forma é com o **React Hooks**.

### React Redux

Para o teste da aplicação, criaremos a página **authentication** e carregaremos no arquivo **app.js**

- Criar o arquivo **index.js** dentro da pasta **src/pages/authentication**;

```js
import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as AuthenticationActions from "../../store/actions/authentication";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#eee",
    flex: 1
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    paddingLeft: 10,
    marginBottom: 10
  },

  error: {
    color: "#f00",
    marginBottom: 10,
    textAlign: "center"
  }
});

class Authentication extends Component {
  state = {
    username: ""
  };

  static propTypes = {
    error: PropTypes.bool,
    loginFailure: PropTypes.func.isRequired,
    loginSuccess: PropTypes.func.isRequired
  };

  static defaultProps = {
    error: false
  };

  onEnter = () => {
    const { username } = this.state;
    const { loginFailure, loginSuccess } = this.props;

    // Valida usuário
    if (username !== "admin") loginFailure();
    else {
      loginSuccess({
        id: 1,
        name: "Administrador"
      });
    }
  };

  render() {
    const { username } = this.state;
    const { error } = this.props;

    return (
      <View style={styles.container}>
        {error && <Text style={styles.error}>Usuário Inválido</Text>}
        <TextInput
          style={styles.input}
          value={username}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          placeholderTextColor="#999"
          onChangeText={text => this.setState({ username: text })}
        />
        <Button title="Entrar" onPress={this.onEnter} />
      </View>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  error: authentication.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthenticationActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
```

> O connect é uma função que retorna outra função, por isso o componente criado é colocado logo em seguida da execução do connect. Isso é um conceito chamado de **high order component**.

### React Hooks

Outra forma de utilizar o redux é instalar a nova versão do React-Redux que possuí suporte ao hooks.

```
yarn add react-redux@next
```

> versão 7.1.0-rc.1

Para o teste da aplicação, criaremos a página **authentication** e carregaremos no arquivo **app.js**

- Criar o arquivo **index.js** dentro da pasta **src/pages/authentication**;

```js
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

import { useSelector, useDispatch } from "react-redux";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#eee",
    flex: 1
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    paddingLeft: 10,
    marginBottom: 10
  },

  error: {
    color: "#f00",
    marginBottom: 10,
    textAlign: "center"
  }
});

export default function Authentication() {
  const [username, setUsername] = useState("");

  const error = useSelector(({ authentication }) => authentication.error);

  const dispatch = useDispatch();

  function onEnter() {
    // Valida usuário
    if (username !== "admin") {
      dispatch({ type: "LOGIN_FAILURE" });
    } else {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: {
            id: 1,
            name: "Administrador"
          }
        }
      });
    }
  }

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>Usuário Inválido</Text>}
      <TextInput
        style={styles.input}
        value={username}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário"
        placeholderTextColor="#999"
        onChangeText={text => setUsername(text)}
      />
      <Button title="Entrar" onPress={onEnter} styles={styles.button} />
    </View>
  );
}
```

## Connectando a aplicação com o store global

- Alterar o arquivo **app.js**;

```js
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import store from "./store";
import Authentication from "./pages/authentication";

const App = () => (
  <Provider store={store}>
    <Authentication />
  </Provider>
);
```
