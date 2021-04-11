# NEXT JS

Criar projeto
```
npx create-next-app
```

# Styled-Components

```
yarn add styled-components
yarn add -D babel-plugin-styled-components
```

Adicionar o arquivo **.babelrc** 

```json
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ],
  ]
}
```

Criar o arquivo na pasta **pages** com o nome **_document.js**

```js
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Title</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
```

Altere o arquivo de estilo global da pasta **styles** com o nome de **globals.css**

```css
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box !important;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Ubuntu', 'Segoe UI', 'Oxygen', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  scrollbar-width: thin;
  scroll-behavior: smooth;

}

html, body {
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  color: #444;
}

#__next {
  display: flex;
  flex: 1;
}

a:link 
{ 
  text-decoration:none; 
} 

h1, h2 {
  font-weight: 600;
}
```