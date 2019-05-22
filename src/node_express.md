[Voltar](/Readme.md)

# Node.js e Express

Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.

[Referência](http://nodebr.com/o-que-e-node-js/)

## Iniciando aplicação Node.js

Criar a pasta para o projeto e acessa-lá através da linha de comando. Executar o seguinte comando para iniciar o projeto node.js

```
yarn init -y
```

> O -y indica para criar os arquivos com os valores default
> Será criado o arquivo **package.json** com as informações do projeto.

## Configurações do Ambiente de desenvolvimento

- Configurar o [ESLint](/src/eslint.md).
- Configurar o [EditorConfig](/src/editorConfig.md).

## Instalando o Nodemon

> Nodemon é um file watcher que roda internamente o próprio comando node. Dessa forma toda e qualquer atualização é executada automaticamente, sem a necessidade de parar e rodar o node novamente.

Adicionar o pacote **nodemon** em modo de desenvolvimento

```
yarn add nodemon -D
```

Adicionar o seguinte script para inicialização do nodemon. Adicionar o script dentro do **package.json**

```json
"scripts": {
  "start": "nodemon src/index.js"
}
```

Por padrão utilizamos "start" no script, dessa forma quando executar o comando, não precisará escrever node index.js e sim yarn start.

```
yarn start
```

Para parar o monitoramento aperte

```
Ctrl + C
```

## Disponilizando o serviço web

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

Criar o arquivos: routes.js, server.js e index.jsdentro da pasta **src**

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
    this.express.use(express.urlencoded({ extended: false }));
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

## Testando o serviço

Executar o comando

```
yarn start
```

Abrir o navegar no endereço [http://localhost:3000](http://localhost:3000). Deverá aparecer o texto **Hello World**

# Links

Configurando o [Sequelizer](/src/sequelize/index.md)

# Comandos utilizados nesse artigo

```
yarn init -y
yarn add nodemon -D
yarn add express
yarn start
```
