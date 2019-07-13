[Voltar](/Readme.md)

# Estrutura do Projeto

Após iniciar o projeto, devemos criar pastas para organizar a estrutura do projeto. Para isso devemos:

- Criar pasta **src** raiz da aplicação.
- Criar pastas: components, pages, services e styles, dentro da pasta **src**
- Criar arquivo **routes.js** dentro da pasta **src**. (veja [rotas](routes.md))

```js
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import home from "./pages/home";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      home
    },
    {
      headerLayoutPreset: "center"
    }
  )
);

export default Routes;
```

- Mover o arquivo **App.js** da raiz da aplicação para dentro da pasta **src**
- Alterar o arquivo **App.js** para carregar as rotas;

```js
import React from "react";

import Routes from "./routes";

const App = () => <Routes />;

export default App;
```

- Alterar a referência do arquivo **App.js** no arquivo **index.js** na raiz do projeto, para buscar o arquivo **App** na pasta **src**.

```js
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
```
