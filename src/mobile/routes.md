[Voltar](/Readme.md)

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

## Configuração Android

Para celulares android, é necessário incluir 3 imports no arquivo Adicionar as 3 Refêrencias no arquivo **MainActivity.java**, localizado na pasta **android/app/src/main/java/com/NOME-PROJETO**

Imports:

```java
import com.facebook.react.ReactRootView;
import com.facebook.react.ReactActivityDelegate;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Adicionar o Delegate:

```java
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
```

Arquivo final:

```java
package com.luminatticrmmobile;

import com.facebook.react.ReactActivity;

import com.facebook.react.ReactRootView;
import com.facebook.react.ReactActivityDelegate;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "luminatticrmmobile";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}

```

## Configuração

Adicionar a biblioteca de navegação

```
yarn add react-navigation
```

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
