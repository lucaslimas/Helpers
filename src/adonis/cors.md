[Voltar](/src/node_adonis.md)

# Cors

O recurso de compartilhamento entre origens (CORS) é um mecanismo que permite que recursos restritos em uma página da Web sejam solicitados de outro domínio fora do domínio do qual o primeiro recurso foi exibido.

Fonte [wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

## Habilitando Cors

Dentro do arquivo **cors.js** da pasta **config**, existe uma propriedade **origin**, esta propriedade indica se sua aplicação aceita requisições fora do próprio domínio.

Nessa informação você informar, **true** para aceitar qualquer requisição de qualquer site, ou definir através de um array, quais os domínio serão permitido.

```js
origin: true,
```

Inclua o método **Delete** dentro da propriedade **methods**.

```js
 methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
```
