[Voltar](/src/node_adonis.md)

# Models

#### Índice

---

1. [Criando Model](#Criando-Model)

---

## Criando Model

Para criar o model execute o comando:

```
adonis make:model nomeModel -m -c
```

> O parâmetro -m indica para o adonis criar a [migration](/src/adonis/migrations.md) e o -c para criar o [controller](/src/adonis/controllers.md)

Dentro do model são definidos todos os relacionamentos do modelo com outras Models (Tabelas). Também é possível fazer operações antes ou depois de qualquer operação no model usando [Hooks](https://adonisjs.com/docs/4.1/database-hooks).

Nesse exemplo é mostrado um relacionamento de um evento por usuário

```js
const Model = use("Model");

class Event extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Event;
```
