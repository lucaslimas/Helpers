[Voltar](/src/adonis/index.md)

# Sentry

Sentry é um rastreamento de erro de código aberto que fornece visibilidade em toda a sua pilha, fornecendo os detalhes necessários para corrigir seus bugs. Mesmo o desenvolvedor mais desajeitado e propenso a erros de digitação pode usar nosso serviço para resolver problemas, bem antes que os usuários os encontrem.

Referência [Sentry.io](https://sentry.io/about/)

## Criar conta no Sentry

1. Crie uma [conta no Sentry](https://sentry.io).

2. Clique em **Projects**, depois em **Create Project**.
   Selecione o Tipo de projeto na lista de projetos. **Node.js**.

3. Informe o nome para o projeto
4. Define o nome do time (Assign a Team)
5. Clique em **Criar Projeto**

Após a criação do projeto, será exibo os passos para a configuração do sentry na aplicação.

## Configurando Sentry

Execute o comando

```
npm install @sentry/node@5.2.0
```

Para enviar ao Sentry basta importar e configurar sentry

```js
const Sentry = require("@sentry/node");
Sentry.init({
  dsn: "https://bfe1c7c1254846569e9866878f166544@sentry.io/1462692"
});
```

Uma boa prática e criar um arquivo de configuração do **sentry** na pasta **config** e usar a variável na configuração.

```js
const Env = use("Env");

module.exports = {
  dsn: Env.get("SENTRY_DSN")
};
```

Arquivo **.env**:

```
SENTRY_DSN=https://bfe1c7c1254846569e9866878f166544@sentry.io/1462692
```

> Informe a sua url do sentry

Altere a forma que carrega as informações do sentry

```js
const Sentry = require("@sentry/node");
const Config = use("Config");
Sentry.init(Config.get("sentry"));
```

Para capturar a exeption, use o comando

```js
Sentry.captureException(error);
```

> Error é a exception gerada na aplicação

Referência [Sentry.io](https://docs.sentry.io/error-reporting/capturing/?platform=node)

# Comandos utilizados nesse artigo

```
npm install @sentry/node@5.2.0
```
