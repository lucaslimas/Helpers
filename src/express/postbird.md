[Voltar](/src/node_express.md)

# Postbird

Postbird é um cliente GUI do PostgreSQL multiplataforma, escrito em JavaScript, executado com o Electron.

Referência [Postbird](https://github.com/Paxa/postbird).

## Downloads

[Windows](https://github.com/Paxa/postbird/releases/download/0.8.2/Postbird.Setup.0.8.2.exe)

[MacOS](https://github.com/Paxa/postbird/releases/download/0.8.2/Postbird-0.8.2.dmg)

# Acessando o Banco de Dados

Abra a IDE do postbird

- Clique na aba **connections**
- Clique no botão **add**
- Clique com o botão direito em \***\*new\*\*** e depois clique em **rename**
- Informe as configurações do banco de dados
  > Caso esteja usando o PostgresSQL com a imagem kartoza/postgis na porta padrão, informe: **Host**:localhost, **Port**:5432, **Username**:docker, **Password**:docker
- Clique em **Save & Connect**
- Em **select datase**, clique na opção **Create database** e informe o nome da database desejada

A criação das tabelas e relacionamentos serão feitas pelo sistema usando o ORM [Sequelize](/src/express/sequelize.md).
