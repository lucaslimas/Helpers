# NUNJUCKS

Renderizador de HTML pelo servidor.

## Configurações Iniciais

Instalar as extenções:

- Nunjucks
- Nunjucks Snippets

## Utilizando Views

Instalar o pacote do nunjucks

```
yarn add nunjucks
```

No arquivo **server.js**, configurar as views e habilitar o express a disponibilizar os arquivos da pasta public.

```js
  views() {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true,
    });

    this.express.use(express.static(path.resolve(__dirname, 'public')));
    this.express.set('view engine', 'njk');
  }
```

> **watch** indica se deseja assistir as alterações nos arquivos do nunjucks, igual o nodemon para os arquivos js.

Criar o arquivo **index.njk**, dentro da pasta **views**, localizado na pasta **src/app**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Home</title>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

Para renderizar as views, basta utilizar o método **render** no momento que desejar retornar os dados para o cliente. Por exemplo no aquivo de rotas

```js
routes.get("/", (req, res) => res.render("index.njk"));
```

Referência [Nunjucks](https://imasters.com.br/front-end/nunjucks-template-engine-para-js)

Referência [Nunjucks Mozila](https://mozilla.github.io/nunjucks/templating.html)
