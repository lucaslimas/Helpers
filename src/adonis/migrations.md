[Voltar](/src/node_adonis.md)

# Migrations

Migrations é um controle de versão da base de dados, guardando todas as alterações na ordem que foram feitas, para que outros desenvolvedores, ou servidor, executem e se atualizem com a nova configuração.

Criar uma migration

```
adonis make:migration nomeMigration
```

Será criado o arquivo de migration dentra da pasta **database/migrations** com o nome xxxxxxx_nomeMigration_schema.js

Dentro do arquivo existem dois métodos **up** e **down** que serão executados quando executar as migrations

> **up** é método que é chamando quando executa o comando run da migration, fazendo assim todas as alterações no banco de dados, seja criação, alteração, etc...

> **down** é executado caso ocorra algum problema na execução da migration ou deseja desfazer as migrations

## Executar as migrations

Para executar as migrations que ainda não forma executadas

```
adonis migration:run
```

Para desfazer as ultimas migrations

```
adonis migration:rollback
```

Referência [Adonis Migration](https://adonisjs.com/docs/4.1/migrations)

# Comandos utilizados nesse artigo

```
adonis make:migration nomeMigration
adonis migration:run
adonis migration:rollback
```
