# Flash Messages

```
yarn add connect-flash
```

```js
const connectFlash = require("connect-flash");
```

Adicionar o flash nos middlewares

```js
this.express.use(connectFlash());
```

Nesse momento todas as requisições passam a ter o **flash** como propriedade do **req**. Para usar, basta informar

```js
req.flash("success", "Registro salvo com sucesso!");
req.flash("error", "Usuário não existe");
```
