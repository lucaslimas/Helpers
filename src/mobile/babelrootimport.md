[Voltar](/Readme.md)

# Babel Root Import

É um plugin que adiciona a oportunidade de usar importação utilizando o caminho raiz, ou seja, não tem a necessidade de informar toda a arvore do arquivo (caminho de onde estão localizados os arquivos).

## Instalação

Adicione o pacote em ambiente de desenvolvimento:

```
yarn add babel-plugin-root-import -D
```

Crie o arquivo **.babelrc** na raiz da aplicação com as seguintes informações:

```json
{
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "rootPathSuffix": "src"
      }
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        [
          "babel-plugin-root-import",
          {
            "rootPathSuffix": "src"
          }
        ]
      ]
    }
  }
}
```

Instalar o plugin do babel para o eslint entender o caracter do babel e não exibir o erro.

```
yarn add eslint-import-resolver-babel-plugin-root-import -D
yarn add babel-eslint -D
```

Adicionar as configuração do babel no arquivo **.eslintrc.json** ou **.eslintrc.js** localizado na raiz do aplicativo.

```json
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": {}
    }
  }
```

Adicionar a referência no VSCode para entender e buscar o arquivo com CTRL + Clique.

Adicione o arquivo **jsconfig.json** na raiz do aplicativo

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

Feche e abra novamente o VSCode.

Referência [babel](https://www.npmjs.com/package/babel-plugin-root-import)

# Comandos utilizados nesse artigo

```
yarn add babel-plugin-root-import -D
yarn add eslint-import-resolver-babel-plugin-root-import -D
yarn add babel-eslint -D
```
