[Voltar](/Readme.md)

# Autenticação

Para a criação do Login, será utilizado o pacote [@rocketseat/unform](https://github.com/Rocketseat/unform) da rocketseat para fazer o gerenciamento dos campos da tela, o pacote [Yup](https://www.npmjs.com/package/yup) para criar as validações e o [styled-components](https://www.npmjs.com/package/styled-components) para criar o designer;

```
yarn add @rocketseat/unform yup styled-components
```

Criar a **Login** dentro de **pages** com o arquivo **index.js**

```js

```

## Adicionando a Rota de Login

Importar e adicionar a rota **/login** no arquivo de rotas.

```js
import Login from "~/pages/Login";
```

Adicionar no Switch a rota do login

```js
<Route path="/login" component={Login} />
```