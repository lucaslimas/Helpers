[Voltar](/src/Sequelize.md)

# Criando Models

## Criando um modelo de usuário:

Criar o arquivo **User.js** dentro da pasta **models** com as seguintes informações:

```js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.String
  });
};
```

> Não é necessário criar os campos IDs e campos de associações, isso é feito automaticamente pelo sequelize

Criar o arquivo de migração para o usuário

```
npx sequelize migration:create --name=create-users
```

No comando acima, podemos dar o nome que for necessário para identificar a migração, no nosso exemplo será uma migração de criação da tabela usuários.

Dentro do arquivo de **migrations** criado, existem dois métodos, o **up** e o **down**, o up é executado no momento que disparamos as migrations e com isso é executado tudo que estiver dentro do up, caso ocorra algum erro, é executado o down, removendo assim as alterações feitas nas tabelas.

Para criar a migrations de criação de tabela devemos informar dentro do método **up** as informações do campo e no **down** informar o que deve ser feito quando não funcionar a migration, ou desejar voltar como era antes da criação.

```js
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password_hash: {
        allowNull: false,
        type: Sequelize.STRING
      },
      create_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      update_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("users")
};
```

> As colunas **create_at** e **update_at** devem ser especificadas, pois na configuração do sequelize, foi utilizado paramêtro **timestamps**.

Para executar as migrations, basta executar o comando:

```
npx sequelize db:migrate
```

Para voltar a ultima migration

```
npx sequelize db:migrate:undo
```

# Comandos utilizados nesse artigo

```
npx sequelize migration:create --name=create-users
npx sequelize db:migrate
npx sequelize db:migrate:undo
```
