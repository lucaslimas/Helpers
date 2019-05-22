[Voltar](/src/node_adonis.md)

# Paginação

Para criar paginação, deve ser incluir o propriedade **paginate** no método de retorno do controller

```js
await ModelName.query().paginate(1);
```

Os dados para serem usados na paginação pode ser recebidas pela requisição, por exemplo na queryString

```
http://localhost:3000/events?page=1
```

E obter as informações dentro do método do controller

```js
const { page } = request.get();
const list = await NomeDoModel.query().paginate(page);
return list;
```

> Pode obter caso necessário outros parâmetros da paginação, como número de itens por página e etc. Consulte [Paginação](https://adonisjs.com/docs/4.1/lucid#_pagination)
