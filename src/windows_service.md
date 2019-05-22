[Voltar](/Readme.md)

# Windows Service com Node

Este artigo cria um serviço com express que será executado como serviço no windows (windows service).

## Iniciando o projeto

Inicie o projeto node com express.
Veja [express node](/src/node_express.md).

## Criando estrutura do "deploy"

Criar a pasta `__deploy__` na raiz da aplicação

> O underline é apenas para que a pasta fique em cima de todas as pastas na estrutura do VSCode

Copie os [arquivos do deploy](https://github.com/lucaslimas/deploy) para dentro da pasta `__deploy__`

> São arquivos .bat para instalação do serviço no window.

## Instalando o compilador Webpack

A príncipal função que irei utilizar do webpack, será a criação de um build da aplicação. Isso criará um único arquivo para a produção

Instalar os seguintes pacotes:

```
yarn add -D webpack webpack-cli webpack-node-externals @babel/core @babel/preset-env babel-loader copy-webpack-plugin
```

Criar o arquivo de configuração do webpack com o nome **webpack.config.js** na raiz da aplicação

```js
require("dotenv").config();
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = [
  {
    name: "server",
    entry: "./src/index.js",
    target: "node",
    output: {
      path: __dirname + "/dist",
      filename: "index.js"
    },
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new CopyPlugin([
        "__deploy__",
        {
          from: ".env-prod",
          to: "."
        },
        {
          from: ".windows_service",
          to: "bin/service.config.bat"
        }
      ])
    ]
  }
];
```

> Dicas de como usar o plugin copy-webpack-plugin, veja [github](https://github.com/webpack-contrib/copy-webpack-plugin).

Adicione mais dois scripts no arquivo **package.json** na propriedade **scripts**.

```json
  "build": "rm -rf dist && webpack --mode development",
  "test": "node ./dist/index.js"
```

Crie o arquivo **.babelrc** na raiz da aplicação

```json
{
  "presets": ["@babel/preset-env"]
}
```

Referência [medium.com](https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)

## Criando o arquivo de configuração do windows service

Crie o arquivo **.windows_service** na raiz da aplicação

```
SET SERVICE_NAME=NomeDoServico
SET SERVICE_DESC=Descricao do Servico
SET SERVICE_WIN=64
```

> Altera as informações para o nome do seu serviço. A propriedade SERVICE_WIN é o tipo da arquitetura do windows que será instalado 64 ou 32.

Crie o arquivo para configuração do ambiente com o nome **.env-prod** na raiz da aplicação

```
NODE_ENV=production
PORT=3000
```

> Esse arquivo será enviado para instalação em produção.

## Gerando o pacote de instalação

Após tudo configurado, para gerar os arquivos de instalação, execute o seguinte comando:

```
yarn build
```

Será criado a pasta **dist** na raiz da aplicação, com todos os arquivos necessário para a instalação do node como um serviço do windows

> Sempre que executar o comando build, todos os arquivos da pasta **dist** serão apagados e criados novamente.

## Instalando o serviço

Para instalar o serviço basta executar o arquivo **install.bat**, que foi criado dentro da pasta **dist**, como administrador.

> Sempre que alterar as configurações do arquivo .env, é necessário reiniciar o serviço para que o serviço entenda as variáveis.

Para desinstalar utilize o bath **uninstall.bat**

## Projeto Modelo

Para ver o projeto completo, acesse [Node Windows Service](https://github.com/lucaslimas/NodeWindowsServiceTpl)

# Comandos utilizados nesse artigo

```
yarn add -D webpack webpack-cli webpack-node-externals @babel/core @babel/preset-env babel-loader copy-webpack-plugin
yarn build
```
