[Voltar](/src/node_express.md)

# Flash Messages

```
yarn add connect-flash
```

```js
const connectFlash = require("connect-flash");
```

Adicionar o flash nos middlewares no **server.js**

```js
this.express.use(connectFlash());
```

Adicionar o middleware para as mensagens flash

```js
routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash("success");
  res.locals.flashError = req.flash("error");
  return next();
});
```

Adicionar o arquivo **flash.njk** dentro de **views/\_partials**

```html
{% for message in flashSuccess %}
<div class="alert alert-success">{{ message }}</div>
{% endfor %} {% for message in flashError %}
<div class="alert alert-danger">{{ message }}</div>
{% endfor %}
```

Nesse momento todas as requisições passam a ter o **flash** como propriedade do **req**. Para usar, no arquivo de rotas, basta informar

```js
req.flash("success", "Registro salvo com sucesso!");
req.flash("error", "Usuário não existe");
```
