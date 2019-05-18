[Voltar](/src/adonis/index.md)

# Usando Rotas

Para configurar as rotas no adonis, basta acessar o arquivo **routes.js** dentro da pasta **start** e informar qual o método e para qual rota deseja chamar o método do controller.

Por exemplo, chamar o store do UserController, quando fizer um post na rota **user**

```
Route.post('user', 'UserController.store');
```

> No adonis não precisamos importar o arquivo do controller, basta indiciar o nome e o método para aquela rota.

Para visualizar todas as rotas configuradas no adonis, execute o comando:

```
adonis route:list
```

## Refatorando as Rotas

Em determinados momentos no arquivo de rotas podemos fazer com que as rotas de um determinado controller, seja feitas automaticamente. Veja o antes o depois:

Antes

```js
Route.get("events", "EventController.index");
Route.post("events", "EventController.store").validator("Event/Store");
Route.put("events/:id", "EventController.update").validator("Event/Update");
Route.get("events/:id", "EventController.show");
Route.delete("events/:id", "EventController.destroy");
```

Depois

```js
Route.resource("events", "EventController")
  .apiOnly()
  .validator(
    new Map([
      [["events.store"], ["Event/Store"]],
      [["events.update"], ["Event/Update"]]
    ])
  );
```

> apiOnly() indica para criar apenas os métodos da api, sem o métodos de retorno de views

# Links

- [Validadores](/src/adonis/validators.md)
- [Trabalhando com Controllers e Models](/src/adonis/controllersModels.md)

# Comandos utilizados nesse artigo

```
adonis route:list
adonis install @adonisjs/validator
adonis make:validator User
```
