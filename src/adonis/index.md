[Voltar](/Readme.md)

# Adonis JS

# Node.js

Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.

[Referência](http://nodebr.com/o-que-e-node-js/)

## Instalando o Adonis

Instalar de forma global a interface de linha de comando do adonis

```
npm install -g @adonisjs/cli
```

Para verificar se o adonis foi instalado, execute o comando:

```
adonis
```

Aparecerá a lista de comandos suportados pelo Adonis.

## Criando o projeto com a inteface do Adonis

Para criar um novo projeto adonis apenas como uma api rest, execute o comando:

```
adonis new appName --api-only
```

> appName é o nome que deseja criar o projeto

Executando o comando **adonis new -h** é possível ver todos os tipos de aplicações possíveis para o adonis.

Para rodar o serviço, execute o seguinte comando:

```
adonis serve --dev
```

> A informação --dev ativa a funcionalidade do nodemon, que é a atualização automática do código. Por padrão ele será executando no endereço [http://127.0.0.1:3333](http://127.0.0.1:3333). Essa url é informada no momento que for executado o comando para deixar o servidor online.

Para parar o servidor, execute o comando:

```
Ctrl + C
```

## Configurações do Ambiente de desenvolvimento

- Configurar o [ESLint](/src/ESLint/index.md).

  > No arquivo **.eslintrc.json**, após a configuração do ESLint, incluir na propriedade **globals** o opção `"use":true`. Isso faz com que o eslint entenda o use como uma função glogal nos arquivos js. Incluir na prop **rules** as informações **class-methods-use-this="off"** e **consistent-return="off"**.

  ```json
  "globals": {
    ...
    "use": true
  },

  "rules": {
    "class-methods-use-this": "off",
    "consistent-return": "off"
  }
  ```

- Configurar o [EditorConfig](/src/EditorConfig.md).

## Configurando tratamento das Exeções (Exceptions)

Na aplicação é comum sempre que ocorrer alguma exeção avisar um outro sistema ou guardar a exeção para tratamento futuro, enviar um e-mail, sms, etc sempre que ocorrer alguma excepção no sistema. Para isso será configurado um tratamento global, que será chamada sempre que uma exeção ocorrer nos controllers da aplicação.

Para criar a classe que tratará as exeções globais, execute o comando:

```
adonis make:ehandler
```

Irá criar dentro da pasta **app** uma pasta chamada **Exceptions**, o arquivo **Handler.js**.

Nesse arquivo existem 2 métodos:

- **handler**: Permite enviar para o usuário algum tipo de mensagem;
- **report**: Permite configurar um envio de e-mail, sms, armazenar o erro, etc.

Alterar o código de **Handler.js**.

```js
const BaseExceptionHandler = use("BaseExceptionHandler");
const Env = use("Env");
const Youch = use("Youch");

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { request, response }) {
    if (error.name === "ValidationException") {
      return response.status(error.status).send(error.messages);
    }

    if (Env.NODE_ENV === "development") {
      const youch = new Youch(error, request.request);
      const errorJson = await youch;
      return response.status(error.status).send(errorJson);
    }

    return response.status(error.status);
  }

  async report(error, { request }) {
    console.log(request);
    console.log(error);
  }
}

module.exports = ExceptionHandler;
```

> Quando houver o erro e estiver em ambiente de desenvolvimento, foi usado o pacote **Youch** que formata a exception de uma forma mais legível, mais fácil de entender.

# Links

- [Configurando Banco de Dados](/src/adonis/database.md)
- [Trabalhando com Controllers e Models](/src/adonis/controllersModels.md)
- [Rotas](/src/adonis/routes.md)
- [Autenticação JWT](/src/adonis/jwt.md)
- [Enviando Email](/src/adonis/email)

# Comandos utilizados nesse artigo

```
npm install -g @adonisjs/cli
adonis
adonis new tetrus --api-only
adonis serve --dev
adonis make:ehandler
```
