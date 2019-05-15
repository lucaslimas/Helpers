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

## Utilizando Validadores

Validadores permitem criar validações para parâmetros passados para rotas.

Instalar o vallidador do Adonis

```
adonis install @adonisjs/validator
```

Adicionar o provider de validação no arquivo **app.js** da pasta **start**, dentro dos providers

```
'@adonisjs/validator/providers/ValidatorProvider'
```

Para validar a rota é necessário criar o arquivo de validação para cada rota (normalmente utilizamos o mesmo nome do model). Nesse exemplo vamos criar um validador para a rota de criação do usuário.

```
adonis make:validator User
```

Será criado a pasta **Validators** dentro da pasta **app** na raiz do projeto.

Nesse arquivo criado, devemos adicionar as regras de validações. Por exemplo, em uma rota de criação de usuários.

```js
class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: "required|unique:users",
      email: "required|email|unique:users",
      password: "required|confirmed"
    };
  }
}

module.exports = User;
```

> O método validateAll faz com que o validador entenda que é pra fazer a validação em todos os campos e não apenas no primeiro que encontrar.

Adicione a validação na rota de criação do usuário

```js
Route.post("users", "UserController.store").validator("User");
```

[Referência Validadores](https://adonisjs.com/docs/4.1/validator)

# Links

- [Trabalhando com Controllers e Models](/src/adonis/controllersModels.md)

# Comandos utilizados nesse artigo

```
adonis route:list
adonis install @adonisjs/validator
adonis make:validator User
```
