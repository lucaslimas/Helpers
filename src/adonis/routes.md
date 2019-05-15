[Voltar](/src/adonis/index.md)

# Rotas

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

# Links

- [Trabalhando com Controllers e Models](/src/adonis/controllersModels.md)

# Comandos utilizados nesse artigo

```
adonis route:list
```
