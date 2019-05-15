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

Aparecerá a lista de comandos suportados pelo adonis.

## Criando o projeto com a inteface do adonis

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

  > No arquivo **.eslintrc.json**, após a configuração do ESLint, incluir na propriedade **globals** o opção `"use":true`. Isso faz com que o eslint entenda o use como uma função glogal nos arquivos js. Incluir na prop **rules** a informação **class-methods-use-this="off"**.

- Configurar o [EditorConfig](/src/EditorConfig.md).

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
```
