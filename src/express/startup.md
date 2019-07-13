[Voltar](/src/node_express.md)

# Express

O Express.js é um framework Node que pode ser comparado com o Laravel para PHP, ele cria abstrações de rotas, middlewares e muitas outras funções para facilitar a criação tanto de API's quanto SPA's.

## Instalando o Express

Para disponibilizar serviços para ser consumidos pelos front-ends, será usado o pacote **express**, esse pacote é utilizado para controlar as requisições (rotas) no servidor.

> Express é um framework para Node.js inspirado no Sinatra. Ele é minimalista, flexível e contém um robusto conjunto de recursos para desenvolver aplicações web, um robusto sistema de roteamento e views.

Instalar o pacote express

```
yarn add express
```

## Arquivo de Variáveis Ambiente

Instale o pacote

```
yarn add dotenv
```

Crie o arquivo **.env** na raiz da aplicação

> Esse arquivo é responsável por armazenar todas as variáveis do ambiente, por exemplo: PORT, NODE_ENV, etc.

Com os seguintes códigos:

```
NODE_ENV=Development
PORT=3000
```

## Configurando estrutura das pastas

No editor é comum separar os arquivos criados pelo desenvolvedor, dos arquivos de estrutura de funcionamento do projeto. Para isso é necessário criar a pasta **src** na raiz do projeto, onde serão armazenados todos os arquivos para o projeto.

Criar o arquivos: routes.js, server.js e index.js dentro da pasta **src**

Arquivo **routes.js**

```js
const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => res.send("Hello World"));

module.exports = routes;
```

Arquivo **server.js**

```js
const express = require("express");
const routes = require("./routes");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
```

Arquivo **index.js**

```js
require("dotenv").config();
const server = require("./server");

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Environment is ${process.env.NODE_ENV}`);
  console.log(`App listening to port ${port}....`);
  console.log("Press Ctrl+C to quit.");
});
```

## Instalando o Nodemon

Instalar o atualizador de arquivos [Nodemon](/src/express/nodemon.md)

## Testando o serviço

Executar o comando

```
yarn start
```

Abrir o navegar no endereço [http://localhost:3000](http://localhost:3000). Deverá aparecer o texto **Hello World**

# Links

Configurando o [Sequelizer](/src/sequelize.md)

# Comandos utilizados nesse artigo

```
yarn init -y
yarn add nodemon -D
yarn add express
yarn start
```
