[Voltar](/Readme.md)

# Transactions.js

Importe os **models**

```js
const models = require("../models");
```

Inicie a transação

```js
const transaction = await models.sequelize.transaction();
```

Utilize o **commit** para confirmar ou **rollback** para desfazer as alterações no banco.

```js
transaction.commit();
//ou
transaction.rollback();
```

Ao utilizar os métodos do modelo do sequelizer, envie a transação como último paramêtro do método.

```js
const user = await User.create(data, { transaction });
```

Utilize o **Try | Catch** para desfazer a transação, caso ocorra algum erro.

```js
const user = await User.create(data, { transaction });
try {
  const user = await User.create(data, { transaction });
  transaction.commit();
} catch (err) {
  transaction.rollback();
}
```

Referência [sequelizejs](http://docs.sequelizejs.com/manual/transactions.html#throw-errors-to-rollback)
