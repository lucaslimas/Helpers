[Voltar](/src/node_adonis.md)

# Configurando o Banco de Dados

Para configurar qual o banco de dados será utilizado pelo adonis, devemos acessar o arquivo **database.js** dentro da pasta **config**.

Nesse arquivos são exibidos os tipos de banco de dados que deseja utilizar, verificar qual o banco e executar o comando que está nos comentários da propriedade.

No nosso exemplo, utilizaremos o **Postgress**. Execute o comando:

```
npm i --save pg
```

Abrir o arquivo **.env** que está na raiz do projeto e alterar as configurações de acesso ao bando de dados.

Alterar o **DB_CONNECTION** para o banco que vamos utilizar, no caso **pg** e configurar todos os parâmetros para o seu banco de dados

Para verificar se está correta a configuração do banco de dados, execute o comando:

```
adonis migration:run
```

Veja [Migrations](/src/adonis/migrations.md).

As tabelas serão criadas no Banco de Dados. Será criada a tabela adonis_schema, que serão guardadas todas as migrations que foram executadas no banco de dados.

> Execute esse comando somente quando ainda não foi disponibilizada essa migration para a produção ou outros desenvolvedores.
