[Voltar](/Readme.md)

# Sequelize

Sequelize é um ORM, ferramenta usada para abstrair a parte de Banco de dados. Desta forma é possível usar javascript para criar, alterar, excluir, etc ao invés de usar comandos sql de insert, update, delete.

## Instalação

Instalar os pacote do **sequelize** e **sequelize-cli**

```
yarn add sequelize
yarn add sequelize-cli -D
```

O pacote sequelize-cli será instalado em modo de desenvolvimento.
Esse pacote permite ter uma interface de linha de comando no terminal, para facilitar a criação de tabelas, models, etc.

Iniciar o sequilize

```
npx sequelize init
```

Com esse comando algumas pastas foram criadas no projeto, como config, migrations, models e seeders, e devem ser movidas para outra localização (estamos utilizando a [estrutura padrão de pastas](/src/structure_default.md) da rocketseat):

- Mover a pasta **config** para dentro da pasta **src**;
- Criar uma pasta chamada **database** dentro da pasta **src**;
- Mover a pasta **migrations** e **seeders** para a pasta **database**;
- Mover a pasta **models** para a pasta **app**;

Criar o arquivo de configuração do Sequelize na raiz do projeto com o nome **.sequelizerc** com as seguintes informações:

```js
const path = require("path");
module.exports = {
  config: path.resolve("src", "config", "database.js"),
  "model-path": path.resolve("src", "app", "models"),
  "seeders-path": path.resolve("src", "database", "seeders"),
  "migrations-path": path.resolve("src", "database", "migrations")
};
```

Para testar, basta executar o comando:

```
npx sequelize migration:create --name=create-users
```

Deverá ser criado um arquivo dentro da pasta **src/database/migrations/xxxxxxx-create-users.js**

> Migrations é um controle de versão da base de dados, guardando todas as alterações na ordem que foram feitas, para que outros desenvolvedores, ou servidor, executem e se atualizem com a nova configuração.

## Alterarando a configuração do sequelize para o banco de dados

Primeiramente altere o nome do arquivo **config.json**, localizado na pasta **src/config**, para **database.js** e informe as seguintes configurações:

```js
module.exports = {
  dialect: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "database-name",
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
```

> Essas são as configurações para o dialeto postgres instalado no docker. Para outras configurações, acesse: [Dialetos do Sequelize](http://docs.sequelizejs.com/manual/dialects.html)

**timestamps** adiciona duas colunas em todas as tabelas, created_at e update_at para controle dos dados dentro da tabela.

**underscored** modifica o padrão do _camel-case_ para o _underline_ nos campos, ou seja, um campo com o nome **NomeUsuario** será **nome_usuario**.

**underscoredAll** segue o padrão acima, porém para o nome das tabelas.

No exemplo no arquivo de configuração, foi utilizado o Postgres e para isso necessário instalar o pacote **pg**, caso queira outro tipo de banco (dialeto), veja o manual oficial do sequelize.

```
yarn add pg
```

Alterar o arquivo **index.js** da pasta **src/app/models** para carregar o arquivo de configuração criado no passo anterior.

```js
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);
const config = require("../../config/database");

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```

- [Criando Modelos](/src/express/sequelize/models.md)
- [Criando Controles](/src/exoress/sequelize/controllers.md)

[Manual oficial de referência do Sequelize](http://docs.sequelizejs.com/manual/)

# Comandos utilizados nesse artigo

```
yarn init -y
yarn add nodemon -D
yarn start
yarn add express
```
