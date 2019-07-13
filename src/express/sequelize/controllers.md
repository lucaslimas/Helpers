[Voltar](/src/express/sequelize.md)

# Controller

## Criando controle de usuários

Crie o arquivo **UserController.js** dentro da pasta **controller** da pasta **app**

```js
const { User } = require("../models");
/*
Sempre pegar o modelo por desestruturação, pois será o arquivo index.js de dentro do modelo que irá retornar os modelos com as referências preenchidas, caso contrário, o modelo não irá funcionar.
*/

class UserController {
  async list(req, res) {
    const response = await User.list();
    res.send(response);
  }

  async create(req, res) {
    const response = await User.create(req.body);
    res.send(response);
  }

  async get(req, res) {
    const { id } = req.params;
    const response = await User.get(id);
    res.send(response);
  }

  async update(req, res) {
    const { id } = req.params;

    const response = await User.update(id, req.body);
    res.send(response);
  }

  async destroy(req, res) {
    const { id } = req.params;
    await User.destroy(id);
    res.sendStatus(200);
  }
}
```

Referência [usando modelos nos controles](http://docs.sequelizejs.com/manual/models-usage.html)
