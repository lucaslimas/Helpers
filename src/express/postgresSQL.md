[Voltar](/src/node_express.md)

# PostgresSQL

É um sistema de gerenciamento de banco de dados relacional que permite aos desenvolvedores integrar ao banco de dados seus próprios tipos de dado e métodos personalizados, desenvolvido pelo Departamento de Ciência da Computação da Universidade da Califórnia em Berkeley.

## Download

[PostgreSQL](https://www.postgresql.org/)

## PostgresSQL usando Docker

Caso queira instalar o PostgreSQL usando o [Docker](/src/docker.md), abra a prompt de comando como **administrador** e execute:

```
docker run --name Aula05 -p 5432:5432 -d -t kartoza/postgis
```

--name = Nome para o serviço.
-p = Direcionamento de Porta. Postgres Usa a porta 5432 como padrão. Nesse caso direcionamos a porta local do nosso computador para a mesma porta do Postgres. xxxx:yyyy ( **x** máquina local, **y** porta do serviço).
-d = Rodar em modo detach, ou seja em background, não precisa deixar o terminal aberto.
-t = Nome da Imagem que deseja utilizar. "kartoza/postgis" é uma imagem do postgres com funções avançadas.

Usuário padrão da imagem é **docker**, a senha é **docker**.

## IDE

Uma das IDEs utilizadas para acessar o banco de dados utilizados é o [Postbird](/src/express/postbird.md).
