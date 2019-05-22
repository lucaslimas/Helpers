[Voltar](/src/node_adonis.md)

# Hooks

Hook é um treco de código que é disparado que é baseado em alguma ação dentro no model.

## Criando hook

Criar o hook executando a interface de linha de comando adonis

```
adonis make:hook NomeDoHook
```

Será criada um arquivo chamado NomeDoHook**Hook.js** dentro da pasta **Hooks** dentro da pasta **app/Models**

Para incluir o kook no modelo, devemos adicionar o event no método boot do modelo (boot é basicamento o constructor do modelo)

```js
  static boot() {
    super.boot();
    this.addHook('nomeDoEvento', 'NomeDoHook.NomeEvendoDoHook');
  }
```

## Eventos:

---

**beforeCreate** - Before creating a new record.
**afterCreate** - After a new record is created.
**beforeUpdate** -Before updating a record.
**afterUpdate** - After a record has been updated.
**beforeSave** -Before creating or updating a new record.
**afterSave** - After a new record has been created or updated.
**beforeDelete** - Before removing a record.
**afterDelete** - After a record is removed.
**afterFind** - After a single record is fetched from the database.
**afterFetch** - After the fetch method is executed. The hook method receives an array of model instances.
**afterPaginate** - After the paginate method is executed. The hook method receives two arguments: an array of model instances and the pagination metadata.

---

Referência [Adonis Hooks](https://adonisjs.com/docs/4.1/database-hooks)
