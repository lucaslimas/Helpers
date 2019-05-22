[Voltar](/src/node_adonis.md)

# Trabalhando com Controllers

Utilizar a interface do comando do adonis para criar arquivos automaticamente, execute o comando:

```
adonis make:controller nomeDoController
```

> Será utilizado o modelo **HTTP Request**, que é a tipo de controller para receber requisições rest no controller.

Dentro da pasta **app** será criado automaticamente dentro de pasta **controller/Http** o arquivo **nomeDoControllerController.js**.

> Em boas estruturas de controllers, é sempre bom que dentro do controller não tenha mais que os 5 métodos mais comum do controler: Index, Store, Create, Update e Destroy, fazendo assim a API Rest.

# Comandos utilizados nesse artigo

```
adonis make:controller nomeDoController
```

---

#### Leituras Seguintes

- [Usando Rotas](/src/adonis/routes.md)
