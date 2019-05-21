# Rotas

Para trabalhar com sistema de navegação por rotas é necessário instalar os pacotes

```
yarn add react-navigation react-native-gesture-handler
```

> O pacote react-native-gesture-handler permite trabalhar com animações

Linkar o pacote

```
react-native link react-native-gesture-handler
```

> Sempre que executar o comando de link é necessário executar o comando **react-native run-android** ou **react-native run-ios**.

Crie o arquivo de **routes.js** dentro da pasta **src**

```js
import { createAppContainer, createSwitchNavigator } from "react-navigation";

//Informe as páginas possíveis para as navegações
import Welcome from "~/pages/welcome";

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome
  })
);

export default Routes;
```

> Existem vários tipos de navegação para se usar no aplicativo, nesse exemplo foi usado **createSwitchNavigator**, ele é uma navegação simples que necessita de comandos via programação para navegar entre as páginas.

### Tipos de navegação

- createBottomTabNavigator
- createDrawerNavigator
- createMaterialTopTabNavigator
- createNavigationContainer
- createNavigator
- createStackNavigator
- createSwitchNavigator

# Comandos utilizados nesse artigo

```
yarn add react-navigation react-native-gesture-handler
react-native link react-native-gesture-handler
```
