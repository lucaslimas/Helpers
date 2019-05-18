[Voltar](/src/adonis/index.md)

# Validadores

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

## Formatando mensagens da validação

Uma das formas para alterar o texto da validaçao, é incluir o propriedade messages no arquivo de validação.

```js
  get messages() {
    return {
      'oldPassword.required': 'O password atual é obrigatório',
      'password.required': 'Novo password é obrigatório',
      'password.confirmed': 'Confirmação do novo password é obrigatório',
      'username.required': 'Nome do usuário é obrigatório',
      'username.unique': 'Nome do usuário já existente'
    };
  }
```

> Conforme esse exemplo, veja que para cada propriedade da validação é criada uma linha para texto da validação.

É possivel também fazer de forma genérica o tratamento das validações, seguindo o exemplo:

```js
  get messages() {
    return {
      required: 'O campo {{field}} é obrigatório',
      'password.confirmed': 'Confirmação do novo password é obrigatório',
      unique: 'O campo {{field}} já existe'
    };
  }

```

Outra forma é fazer arquivos de internacionalização, criando arquivos para cada nacionalidade. Para isso basta criar o arquivo dentro da pasta **resources/locales/en** com o nome **validation.json**

Criando [Internacionalizaçõa](/src/adonis/internatioinalization.md).

```json
{
  "above": "The {{field}} should be above {{argument.0}}.",
  "accepted": "The {{field}} should have been accepted",
  "after": "The {{field}} should be a date after {{argument.0}}",
  "after_offset_of": "The {{field}} should be after {{argument.0}} {{argument.1}} from today’s date",
  "alpha": "The {{field}} should contain letters only",
  "alpha_numeric": "The {{field}} should contain letters and numbers only",
  "array": "The {{field}} should be an ARRAY.",
  "before": "The {{field}} should be a date before {{argument.0}}.",
  "before_offset_of": "The {{field}} should be before {{argument.0}} {{argument.1}} from today’s date",
  "between": "The {{field}} should be between {{argument.0}} and {{argument.1}}.",
  "boolean": "The {{field}} should be true or false.",
  "confirmed": "The {{field}} confirmation does not match.",
  "date": "The {{field}} should be a valid date",
  "date_format": "The {{field}} should be a valid date according to given format {{argument.0}}.",
  "different": "The {{field}} and {{argument.0}} should be different.",
  "email": "The {{field}} should be a valid email address.",
  "ends_with": "The {{field}} should end with given letters ({{argument}}).",
  "equals": "The {{field}} should should equal {{argument.0}}.",
  "in": "The {{field}} should fall within defined values of ({{argument}}).",
  "includes": "The {{field}} should include define letters ({{argument}}).",
  "integer": "The {{field}} should be an INTEGER.",
  "ip": "The {{field}} should be a valid IP address.",
  "ipv4": "The {{field}} should be a valid IPV4 address.",
  "ipv6": "The {{field}} should be a valid IPV6 address.",
  "json": "The {{field}} should be a valid JSON string.",
  "max": "The {{field}} should not be more than {{argument.0}}.",
  "min": "The {{field}} should not be less than {{argument.0}}.",
  "not_equals": "The {{field}} should be different than {{argument.0}}.",
  "not_in": "The {{field}} should not be one of ({{argument}}).",
  "object": "The {{field}} should be a valid OBJECT.",
  "range": "The {{field}} should be between {{argument.0}} and {{argument.1}}.",
  "regex": "The {{field}} format is invalid.",
  "required": "The {{field}} is required.",
  "required_if": "The {{field}} is required when {{argument.0}} exist.",
  "required_when": "The {{field}} is required when value of {{argument.0}} is equal to {{argument.1}}",
  "required_with_all": "The {{field}} is required when all of ({{argument}}) are present.",
  "required_with_any": "The {{field}} is required when any of ({{argument}}) are present.",
  "required_without_all": "The {{field}} is required when none of ({{argument}}) are present.",
  "required_without_any": "The {{field}} is required when any of ({{argument}}) are present.",
  "same": "The {{field}} and {{argument.0}} should match.",
  "starts_with": "The {{field}} should starts with given letters ({{argument}}).",
  "string": "The {{field}} should be a STRING.",
  "under": "The {{field}} should be under {{argument.0}}.",
  "unique": "The {{field}} has already been taken by someone else.",
  "url": "The {{field}} should be a valid url."
}
```

> Nesse exemplo estamos criando um arquivo em inglês das validações
