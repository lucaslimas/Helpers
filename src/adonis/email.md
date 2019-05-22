[Voltar](/src/node_adonis.md)

# Enviando E-Mail

Para o envio de e-mail, será utilizado um serviço de e-mail (fake), chamado **mailtrap**, utilizado em ambiente de desenvolvimento. Com isso todos os e-mails serão recebidos por uma caixa de e-mails, independentemente para qual o e-mail foi informado.

## Configurando o mailtrap.io

Acesse o [mailtrap](https://mailtrap.io/) e crie uma conta no site.

> Com a conta grátis é possível fazer apenas uma caixa de email.

Adicionar as configurações no arquivo **.env**, com as configurações do e-mail que o **mailtrap** informou.

```
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=cc09850d8a02b5
MAIL_PASSWORD=6b4bc86ac89530
```

> Alterar as informações conforme seu serviço de e-mail

Sempre que alterar o arquivo **.env**, o serviço deve ser reiniciado.

## Configurando o modulo de envio de e-mail do adonis

Instalar o pacote de Mail

```
adonis install @adonisjs/mail
```

Adicionar o provider de email no arquivo **app.js** da pasta **start**, dentro dos providers

```
"@adonisjs/mail/providers/MailProvider"
```

Ajustar as configurações do e-mail da pasta **start** no arquivo **mail.js**. Alterar a porta das configurações para obter do arquivo **.env**

```js
port: Env.get('MAIL_PORT'),
host: Env.get('MAIL_HOST'),
```

## Configurando Templates

Instalar o extensão _Edge template support_ no vscode.

Referênciar o provider de views do arqivo **app.js** dentro da pasta **start**, dentro dos providers.

```
"@adonisjs/framework/providers/ViewProvider"
```

Criar a pasta na raiz com o nome de **resources** e dentro dela uma pasta **views**.

Todo template devem ser criados dentro dessa pasta.
o arquivo deve ser com extensão **.edge** e todo seu conteúdo é html. Para usar variáveis, deve ser usado **{{variavel}}**

> Por exemplo, em um e-mail de recuperação de senha, poderia ser usado o seguinte template dentro da pasta **resources/views/emails** o arquivo **forgot_password.edge**, a extensão edge é o padrão usado no adonis para criação do template.

```html
<strong>Recuperando Senha</strong>
<p>
  Foi solicitada uma recuperação de senha para o e-mail <b>{{email}})</b>.<br />
  Caso não tenho sido você quem solicitou a recuperação, ignore este e-mail e se
  possível altere a senha futuramente.
</p>
<p>
  Para continuar a recuperação de senha, utilize o token {{token}} ou clique no
  link:
</p>
<a href="{{link}}">Recuperar Senha</a>
```

No Controller usar o Mail do adonis e o crypto para geração do token

```js
const Mail = use("Mail");
const Crypto = require("crypto");
```

Para enviar email

```js
const token = Crypto.randomBytes(10).toString("hex");
await Mail.send(
  "emails.forgot_password",
  {
    email: "diego@rocketseat.com",
    token: token,
    link: `${request.input("redirect_url")}?token=${token}`
  },
  message => {
    message
      .to("diego@rocketseat.com")
      .from("lucasde_lima@hotmail.com")
      .subject("Recuperação de Senha");
  }
);
```

> Nesse exemplo é necessário enviar o redirect_url no POST, junto do e-mail. No envio do token para a recuperação de senha usar

# Referências

- [Adonis Mail](https://adonisjs.com/docs/4.1/mail)

# Comandos utilizados nesse artigo

```
adonis install @adonisjs/mail
```
