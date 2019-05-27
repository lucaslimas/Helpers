[Voltar](/Readme.md)

# Autenticação por Sessão

## Configurações Iniciais

Criar o tratamento de exceções global na aplicação.

Veja [Exceptions](/src/express/exceptions.md)

Crie o modelo de usuários

Veja [Criando Modelo](/src/sequelize/models.md)

Adicionar o pacote de sessões do express

```
yarn add express-session
```

> Esse pacote é responsável pela sessão da aplicação.

Import o pacote no arquivo **server.js**, localizado na pasta **app**.

```js
const session = require("express-session");
```

Adiconar o **middleware** de sessão dentro do arquivo **server.js** no método **middlewares**.

```js
this.express.use(
  session({
    secret: "EssaEhACriptografiaDaSessao",
    resave: false,
    saveUninitialized: false
  })
);
```

Referência [express session](https://github.com/expressjs/session)

O problema de criar a sessão para guardar a autenticação do usuário é o fato de quando publicar uma nova versão, ou até mesmo em abiente de desenvovimento quando usamos o nodemon, ele vai apagar a sessão. Nesse caso precisamos armazenar a sessão em algum lugar, seja em um arquivo ou em um banco dados. Nesse exemplo utilizaremos em arquivo.

Para criação do arquivo de sessão, adicionar o pacote **connect-loki**

```
yarn add connect-loki
```

Importar o pacote **connect-lock** no arquivo **server.js**

```js
const path = require("path");
const LokiStore = require("connect-loki")(session);
```

Criar a pasta **tmp** na raiz da aplicação.

Alterar o middleware de sessão

```js
this.express.use(
  session({
    name: "root",
    store: new LokiStore({
      path: path.resolve(__dirname, "..", "tmp", "sessions.db")
    }),
    secret: "EssaEhACriptografiaDaSessao",
    resave: true,
    saveUninitialized: true
  })
);
```

> Será criado um arquivo de **sessions.db** na pasta **tmp**.

Criar o arquivo **auth.js** dentro da pasta **middleware**. Esse middleware será responsável por verificar se o usuário está autenticado para poder acessar as rotas.

```js
module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user;
    next();
  }

  res.status(401).send({
    error: {
      message: "Usuário não autorizado"
    }
  });
};
```

> Locals é a propriedade que é disponibilizada para todas as views de dentro do servidor. Em APIs Rest ela não será utilizada

Para utilizar esse middleware de autenticação basta colocá-lo na rota que deseja verificar a autenticação

```js
const authMiddleware = require("./app/middlewares/auth");

routes.get("/users/:id", authMiddleware, handle(UserController.show));
```

Para adicionar o middleawere a um grupo de rotas, uma boa prática é colocar todas as rotas partindo de uma rota inicial, por exmplo '/api/v1', que é o padrão de APIs, e deixar apenas a rota de login fora desse prefixo. Dessa forma todas as requisições feitas nessa rota inicial passará pelo middleware.

```js
const authMiddleware = require("./app/middlewares/auth");

routes.use("/users", authMiddleware);
```

> Para todas as rotas que iniciarem com **/users** será verificado se o usuário está logado

### Criando o controle de sessão

Criar o controller **SessionContoller** para controlar a sessão do usuário

```js
const { User } = require("../models");

class SessionController {
  async destroy(req, res) {
    req.session.destroy(() => {
      res.clearCookie("root");
    });
    res.sendStatus(200);
  }

  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email
      }
    });

    if (!user) {
      res.status(400).send({
        error: {
          message: "Usuário e/ou senha inválido"
        }
      });
    }

    if (!(await user.checkPassword(password))) {
      res.status(400).send({
        error: {
          message: "Usuário e/ou senha inválido"
        }
      });
    }

    req.session.user = user;

    res.sendStatus(200);
  }
}

module.exports = new SessionController();
```

## Criando as rotas de autenticação

Para logar no sistema

```js
routes.post("/login", handle(SessionController.store));
```

Para fazer logout

```js
routes.delete("/api/v1/logout", handle(SessionController.destroy));
```
