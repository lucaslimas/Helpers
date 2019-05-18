[Voltar](/src/adonis/index.md)

# Autenticação JWT

O JWT é um padrão (RFC-7519) de mercado que define como transmitir e armazenar objetos JSON de forma compacta e segura entre diferentes aplicações. Os dados nele contidos podem ser validados a qualquer momento pois o token é assinado digitalmente.

[Leia mais](https://medium.com/tableless/entendendo-tokens-jwt-json-web-token-413c6d1397f6)

#### Índice

---

1. [Criando o controller de sessão](#Criando-o-controller-de-sessão)
2. [Validando parâmetros na rota](#Validando-parâmetros-na-rota)
3. [Recuperação de Senha](#Recuperação-de-Senha)
4. [Criando validadores para a recuperação de senhas](#Criando-validadores-para-a-recuperação-de-senhas)
5. [Bloqueando rotas não autenticado](Bloqueando-rotas-não-autenticado)

---

## Criando o controller de sessão

Criar o [controller](/src/adonis/controllersModels.md) **sessions** para requisição HTTP, para controlar a criação dos tokens

```
adonis make:controller Sessions
```

Criar o método **store** dentro do controller **SessionsController**

```js
class SessionsController {
  async store({ request, auth }) {
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
  "email": "informeoemail@email.com",
  "password": "suasenha"
}
```

## Validando parâmetros na rota

Veja [Validando Rotas](/src/adonis/routes.md).

Criar o validador para a **Session**

```
adonis make:validator Session
```

Alterar o código do validador da sessão

```js
class Session {
  get validatorAll() {
    return true;
  }

  get rules() {
    return {
      email: "required|email",
      password: "required"
    };
  }
}

module.exports = Session;
```

Incluir a validação na rota de autenticação

```js
Route.post("sessions", "SessionController.store").validator("Session");
```

## Recuperação de Senha

Nesse exemplo será utilizado o [Emailtrap](/src/adonis/email) para envio do email e o template do adonis para o e-mail.

> Lembre-se de adicionar o provider **'@adonisjs/mail/providers/MailProvider'** no arquivo **app.js** da pasta **start**.

Criar o [controller](/src/adonis/controllersModels.md) **ForgotPassword**.

```js
const Crypto = require("crypto");
const moment = require("moment");

const User = use("App/Models/User");
const Mail = use("Mail");

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input("email");
      const user = await User.findByOrFail("email", email);

      user.token = Crypto.randomBytes(10).toString("hex");
      user.token_created_at = new Date();

      await user.save();

      await Mail.send(
        "emails.forgot_password",
        {
          email,
          token: user.token,
          link: `${request.input("redirect_url")}?token=${user.token}`
        },
        message => {
          message
            .to(user.email)
            .from(user.mail)
            .subject("Recuperação de Senha");
        }
      );
    } catch (err) {
      return response.status(err.status).send({
        error: {
          message: "Não foi possível localizar o e-mail"
        }
      });
    }
  }

  async update({ request, response }) {
    try {
      const { token, password } = request.all();

      const user = await User.findByOrFail("token", token);

      // Verifica se o token não expirou com mais de um dia
      const tokenExpired = moment()
        .subtract("1", "days")
        .isAfter(user.token_create_at);

      if (tokenExpired) {
        return response.status(401).send({
          error: {
            message: "O token não é mais válido!"
          }
        });
      }

      user.token = null;
      user.token_created_at = null;
      user.password = password;

      await user.save();
    } catch (err) {
      response.status(err.status).send({
        error: {
          message:
            "Não foi possível resetar a senha. O token é inválido ou não é mais válido"
        }
      });
    }
  }
}

module.exports = ForgotPasswordController;
```

## Criando validadores para a recuperação de senhas

Veja [Validando Rotas](/src/adonis/routes.md).

Como o controller ForgotPassword tem duas rotas, é necessário criar dois validadores, um pra cada método (rota).

Validadores: **ForgotPassword** e **ResetPassword**.

Criar o validador **ForgotPassword**

```
adonis make:validator ForgotPassword
```

Alterar o código do validador

```js
class ForgotPassword {
  get validatorAll() {
    return true;
  }

  get rules() {
    return {
      email: "required|email",
      redirect_url: "required|url"
    };
  }
}

module.exports = ForgotPassword;
```

Incluir a validação na rota

```js
Route.post("forgot_password", "ForgotPasswordController.store").validator(
  "ForgotPassword"
);
```

Criar o validador **ResetPassword**

```
adonis make:validator ResetPassword
```

Alterar o código do validador

```js
class ResetPassword {
  get validatorAll() {
    return true;
  }

  get rules() {
    return {
      token: "required",
      password: "required|confirmed"
    };
  }
}

module.exports = ResetPassword;
```

Incluir a validação na rota

```js
Route.post("forgot_password", "ForgotPasswordController.store").validator(
  "ForgotPassword"
);
```

## Bloqueando rotas não autenticado

Para bloquear as rotas para usuário não autorizado, deve se incluir um [middleware](/src/middleware.md) para a rota desejada.

```js
Route.get(url, closure).middleware(["auth"]);
```

Caso precise bloquear diversar rotas, é possível incluir o middleware em um grupo de rotas

```js
Route.group(() => {
  Route.get(url, closure);
  Route.post(url, closure);
  Route.put(url, closure);
  Route.delete(url, closure);
}).middleware(["auth"]);
```

# Comandos utilizados nesse artigo

```
adonis make:controller Sessions
```
