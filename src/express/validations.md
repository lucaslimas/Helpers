[Voltar](/Readme.md)

# Validações.js

Criar a pasta **validations** na pasta **src/app**.

Adicionar o pacote **joi** e **express-validation**

```
yarn add joi express-validation
```

> Esse pacote é um middleware, um schema validator, reflete o objeto com um schema e faz as comparações.

Criar o arquivo **User**, que fará a validação para o usuário.

```js
const Joi = require("joi");

module.exports = {
  body: {
    name: Joi.string().required(),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    password: Joi.string()
      .required()
      .min(6),
    password_confirm: Joi.string().required()
  }
};
```

Importar o validador nas routas;

```js
const validate = require("express-validation");
const UserValidator = require("./app/validators/User");

routes.get("/api/v1/users", validate(UserValidator), (req, res) =>
  res.send("ok")
);
```

Veja [Exceptions](/src/express/exceptions.md)

Referência [Joi Npm](https://www.npmjs.com/package/joi)

# Comandos utilizados nesse artigo

```
yarn add joi express-validation
```
