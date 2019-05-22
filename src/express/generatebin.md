[Voltar](/Readme.md)

# Em Construção

Para gerar o executável, é necessário instalar o pacote pkg globalmente

```
npm install -g pkg
```

Para verificar quais os parametros é possível usar, utilize a ajuda do pkg

```
pkg --help
```

Adicione no arquivo **package.json**

```
  "bin": "src/index.js",
  "pkg": {
    "scripts": "build/**/*.js",
    "assets": ["src/**/*"]
  }
```

Referência [Pkg Github](https://github.com/zeit/pkg)

## Criando Windows Service

Instale o pacote de node do windows

```
npm install node-windows
```

Para instalação do serviço, é necessário criar o arquivo de instalação. Crie o arquivo **install.js** na raiz do projeto

```js
const { Service } = require("node-windows");
const path = require("path");

// Create a new service object
const svc = new Service({
  name: "Lucas",
  description: "Serviço de Teste",
  script: path.join(__dirname, "src", "index.js"),
  env: {
    name: "NODE_ENV",
    value: "production"
  }
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", () => {
  svc.start();
});

svc.on("start", () => {
  console.log(
    `${svc.name} started!\nVisit http://127.0.0.1:3000 to see it in action.`
  );
});

svc.install();
```

Para desinstalação do serviço, é necessário criar o arquivo de instalação. Crie o arquivo **uninstall.js** na raiz do projeto

## Windows

Instalar a última versão do [node]().

Instalar globalmente o pacote **node-windows**

```
npm install -g node-windows
```

referência [coreybutler/node-windows](https://github.com/coreybutler/node-windows)

https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334

https://nssm.cc/usage

https://www.npmjs.com/package/copy-webpack-plugin
