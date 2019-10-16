[Voltar](/Readme.md)

# Root Import

Root import é a forma que importamos um componente para dentro da nossa aplicação. Normalmente é feita uma navegação na estrutura de pastas dos arquivos através de ../../../ ficando as complicado de localizar um arquivo. O root import simplifica o processo de localização do arquivo.

Adicione os pacotes:

```
yarn add customize-cra react-app-rewired babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D
```

Adicionar o arquivo **config-overrides.js** na raiz do projeto 
```js
// eslint-disable-next-line import/no-extraneous-dependencies
const { addBabelPlugin, override } = require("customize-cra");

module.exports = override(
  addBabelPlugin([
    "babel-plugin-root-import",
    {
      rootPathSuffix: "src"
    }
  ])
);

```
Alterar os scripts do arquivo **package.json** para a novo pacote rewired.

```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

### ESLint

Alterar o arquivo **.eslintrc.js**  da raiz do projeto, para aceitar o root import e não exibir o erro de path no VSCode.

Adicione a propriedade **settings** no arquivo **.eslintrc.js**

```js
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      }
    }
  }
```

### VSCode

Adicionar o arquivo **jsconfig.json** na raiz do projeto.

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```


