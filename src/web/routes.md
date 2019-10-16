[Voltar](/Readme.md)

# Rotas

Permite navegar entre as páginas na aplicação sem carregar um novo html, pois react é uma aplicação **single page**, ou seja, uma única página será aberta no navegador, onde apenas serão trocados o seu conteúdo.

## Iniciando as Rotas

Adicionar o pacote de gerenciamento de rotas e pacote history que permite navegar na aplicação a partir de qualquer ponto do projeto

```
yarn add react-router-dom history
```

Criar a pasta **routes** dentro da pasta **src** e adicionar o arquivo **history.js**
```js
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default history;
```

Criar a pasta **pages** dentro da pasta **src**, onde serão armazenados as páginas da aplicação.

Criar dentro da pasta **pages** a pasta **Home** e dentro um arquivo **index.js**
```js
import React from "react";

export default function Home() {
  return <h1>Home Page</h1>;
}

```

Criar dentro da pasta **pages** a pasta **Test** e dentro um arquivo **index.js**
```js
import React from "react";

export default function Test() {
  return <h1>Test Page</h1>;
}
```

## Configurando as Rotas

Criar o arquivo **index.js** dentro da pasta **routes**

```js
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Home from "./pages/Home";
import Test from "./pages/Test";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/test" component={Test} />
        <Route path="/" component={<h1>não existe</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}
```
> Na rota raíz é necessário colocar a propriedade **exact** para ser chamada somente quando a url for exatamente a raiz.

Importar o arquio de rotas na aplicação.

Dentro do arquivo **app.js** na pasta **src**
```js
import React from "react";

import Routes from "./routes";

function App() {
  return <Routes />;
}

export default App;
```

## Definindo acesso privado das Rotas

Em algumas aplicações é necessário que o acesso a determinadas rotas sejam permitidas somente se o usuário estiver logado na aplicação. Para bloquear esse tipo de acesso ao usuário que não está logado.

Criar o arquivo **route.js** dentro da pasta **routes**
```js
import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

    if (!signed && isPrivate) {
    const { location } = rest;

    const path =
      location.pathname === "/login" || location.pathname === "/"
        ? `/${encodeURIComponent("/home")}`
        : `/${encodeURIComponent(location.pathname)}`;

    return <Redirect to={`/login${path}`} />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
```

> A constante **signed** deve ser obtida pelo Redux, onde serão guardas as informações do logado

Veja mais em [Autenticação](/src/web/authentication.md).

Alterar no arquivo de rotas o objeto Route que está no **react-router-dom** para o novo arquivo **route.js**

```js
import React from "react";
import { Router, Switch } from "react-router-dom";
import Route from "./route";
import history from "./history";

import Home from "~/pages/Home";
import Test from "~/pages/Test";
import E404 from "~/pages/Errors/E404";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/test/:name" component={Test} isPrivate />
        <Route path="/" component={E404} />
      </Switch>
    </Router>
  );
}
```


## Exibindo página não encontrada

Quando o usuário informar uma rota que não existe é necessário exibir uma página informando que a página não foi encontrada (Erro 404).

Criar a **Errors** e dentro da pasta criar outra pasta **E404** e adicionar o arquivo **index.js**
```js
import React from "react";

export default function E404() {
  return <h1>404 - Página não encontrada</h1>;
}
```

Importar a página de erro 404 dentro do arquivo de rotas

```js
import E404 from "./pages/Errors/E404";
```

Adicionar como ultima opção da rota
```js
<Route path="/" component={E404} />
```

Arquivo Final
```js
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Home from "./pages/Home";
import Test from "./pages/Test";
import E404 from "./pages/Errors/E404";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/test" component={Test} />
        <Route path="/" component={E404} />
      </Switch>
    </Router>
  );
}
```

## Navegando entre as rotas

Para ir de uma página a outra, é necessário usar o componente **Link** do **react-router-dom**.

```js
import { Link } from "react-router-dom";
```

Alterar a página **Home** e incluir o link para acessar a página Teste

```js
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/test">Página de Teste</Link>
    </>
  );
}
```

Todos os métodos para navegar entre o histórico de navegação, podem ser acessados pelo componente **history**.

Para configurar o botão voltar, adicionar um botão na página de **Teste** e utilize o método **goBack()** do history.

```js
import React from "react";
import PropTypes from "prop-types";
import history from "~/routes/history";

export default function Test() {
  function onBackClick() {
    history.goBack();
  }
  return (
    <>
      <h1>Test Page</h1>
      <button type="button" onClick={onBackClick}>
        Voltar
      </button>
    </>
  );
}
```

### Passando parâmetro pela rota

Para enviar um parâmetro, é necessário definir o nome da variável na rota que irá receber o parâmetro.

```js
<Route path="/test/:name" component={Test} />
```

No componente link na página **Home**, enviar o parâmetro

```js
<Link to="/test/lucas">Página de Teste</Link>
```

Para obter o parâmetro na página de teste, basta acessar o nome do parâmetro na propriedade **params** do objeto **match**.


### Exemplo completo

### Arquivo de Rotas

```js
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Home from "./pages/Home";
import Test from "./pages/Test";
import E404 from "./pages/Errors/E404";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/test/:name" component={Test} />
        <Route path="/" component={E404} />
      </Switch>
    </Router>
  );
}
```

#### Página Home

```js
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/test/lucaslima">Página de Teste</Link>
    </>
  );
}
```

> Caso necessite passar parâmetros com caracteres especiais, utilize o método encodeURIComponent(value) para enviar e decodeURIComponent(value) para obter o valor.

#### Página Teste

```js
import React from "react";
import PropTypes from "prop-types";
import history from "~/routes/history";

export default function Test({  match }) {
  const { name } = match.params;

  function onBackClick() {
    history.goBack();
  }
  return (
    <>
      <h1>Test Page</h1>
      <h2>Name: {name}</h2>
      <button type="button" onClick={onBackClick}>
        Voltar
      </button>
    </>
  );
}

Test.propTypes = {
  match: PropTypes.shape().isRequired
};
```

## Links

- [Estilazação Global](/src/web/globalStyles.md)

# Comandos utilizados nesse artigo

```
yarn add react-router-dom
```
