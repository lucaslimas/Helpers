[Voltar](/Readme.md)

# Autenticação JWT

## Configurações Iniciais

Criar o tratamento de exceções global na aplicação.

Veja [Exceptions](/src/express/exceptions.md)

## Criando o modelo de Usuários

Criar o arquivo **User.js** dentro da pasta **models** da pasta **app**.

```js
```

##

Criar o controller **SessionContoller** para controlar a sessão do usuário

```js
class SessionController {
  async store(req, res) {
    res.send("Logando");
  }
}

module.exports = new SessionController();
```

Importe o controller e adicione a rota no arquivo **routes.js**

```js
const SessionController = require("./app/controller/SessionController");

routes.post("/session", SessionController.store);
```
