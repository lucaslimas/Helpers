[Voltar](/src/adonis/index.md)

# Autenticação JWT

Criar o [controller](/src/adonis/controllersModels.md) **sessions** para requisição HTTP, para controlar a criação dos tokens

```
adonis make:controller Sessions
```

Criar o método **store** dentro do controller **SessionsController**

```js
class SessionsController {
  async strore({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}
module.exports = SessionsController;
```

> Para alterar o tipo de token ou as configurações de qual campo quer usar para autenticar, acesse o arquivo **auth.js** da pasta **config**.

Agora basta configurar a rota para o **SessionController**.
Adicione o seguinte código dentro do arquivo de **routes**

```js
Route.post("sessions", "SessionController.store");
```

Para testar basta utilizar o Insomnia, Postman ou algum software de sua escolha, para fazer a requisição nessa rota.

```
Método: POST
Url: http://localhost:3333/sessions
JSON: {
  "email": "informeoemail@email.com"
}
```

# Comandos utilizados nesse artigo

```
adonis make:controller Sessions
```
