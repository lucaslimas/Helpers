[Voltar](/src/node_adonis.md)

# Internacionalização

## Instalando

Para instalar o pacote que controla a internacionalização no adonis, execute o comando:

```
adonis install @adonisjs/antl
```

> Irá perguntar onde deseja guardar as traduções, no banco de dados ou em arquivos.

Será adicionado dentro do arquivo **app.js** da pasta **config** a propriedade locales, com a informação de qual a nacionalização e se será em arquivo (file) ou banco de dados (database).

Adicione o provider

```
'@adonisjs/antl/providers/AntlProvider'
```

Agora basta incluir os arquivos com as traduções dentro da pasta, conforme a sua nacionalização e carregar os arquivos onde necessitar com o comando:

```js
const Antl = use("Antl");

///Basta informar o nome do arquivo
Antl.list("nomeDoArquivo");
```

Referencia [Adonisjs Internationalizations](https://adonisjs.com/docs/4.1/internationalization)

# Comandos utilizados nesse artigo

```
adonis install @adonisjs/antl
```
