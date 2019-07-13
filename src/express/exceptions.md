[Voltar](/src/node_express.md)

# Exceções

Para garantir que qualquer erro seja tratado na sua aplicação, é possível criar um tratamento de erro global.

Instalar os pacote **youch**, para formatar os erros de forma mais simples, o pacote **joi** e o **express-validation**.

```
yarn add youch joi express-validation
```

Importe o arquivo **youch** e **express-validation** dentro do arquivo **server.js**, localizado na pasta **src**

```js
const Youch = require("youch");
const validate = require("express-validation");
```

No mesmo arquivo **server.js**, crie um middleware para tratamento das exceções

```js
this.express.use(async (err, req, res, next) => {
  if (err instanceof validate.ValidationError) {
    return res.status(err.status).json(err);
  }

  const youch = new Youch(err);
  const detail = await youch.toJSON();

  res.status(err.status || 500).json({
    error: {
      message: "Erro interno",
      detail
    }
  });
});
```

> O método deve ser chamado OBRIGATÓRIAMENTE depois da configuração da rotas;

```
    this.middlewares();
    this.routes();
    this.exception();
```

> Sempre que o middleware tiver 4 parametros, o primeiro parametro no middleware é o erro.

Adicionar o pacote para capturar todas as exceções não tratadas nos controllers

```
yarn add express-async-handler
```

E importar no arquivo de rotas

```js
const handle = require("express-async-handler");
```

Informar o handler antes dos métodos chamados nos controles nas rotas. Por exemplo no arquivo **routes.js**

```js
const routes = express.Router();
const handle = require("express-async-handler");
const SessionController = require("./app/controller/SessionController");
routes.post("/session", handle(SessionController.store));
```
