[Voltar](/Readme.md)

# Estilos Globais

A estilização do projeto é feita utilizando o pacote [styled components](/src/styledComponents.md)

Criar a pasta **styles** dentro da pasta **src** e adicionar o arquivo **global.js**

```js
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%
  }

  body {
    background-color: #efefef;
  }

  body, input, button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
  }
`;

```

Adicionar o arquivo no arquivo da aplicação, no arquivo **App.js**
```js
import React from "react";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;

```