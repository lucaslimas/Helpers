[Voltar](/Readme.md)

# Configurações Iniciais

Instalar o CLI para criação da estrutura básica de uma aplicação React JS
```
yarn global add create-react-app
```

Dessa forma para iniciar um projeto, basta informar:

```
create-react-app my-app-teste
```

Após a criação da estrutura do projeto, acessar o arquivo **package.json** e apagar a configuração do **esLintConfig**.

## Configurando EditorConfig

Configurar o [EditorConfig](/src/editorConfig.md)

## Configurando o ESLint

[Adicionar o ESLint](/src/eslint.md) em modo de desenvolvimento.

## Configurando o Prettier

Adicionar os pacotes do Prettier em modo de desenvolvimento.

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Alterar o arquivo **.eslint.js**
```js
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      }
    }
  }
};
```

## PropTypes

Com a instalação do ESlint, algumas regras de codificação ficam obrigatórias, por exemplo, a validação de propriedades do componentes, garantindo que o componente seja construido e seus valores sejam passado entre cada componente.

Instalar o pacote **prop-types**

```
yarn add prop-types
```

Referência [prop-types](https://www.npmjs.com/package/prop-types)

## Próximos Passos

Antes de prosseguir, é interessante saber um pouco sobre o conceito de componentes em react, pois a partir de agora, todo o desenvolvimento de React JS é baseado em componentes.

Entenda o que são [Componentes](/src/components.md).

## Links 

- [Rotas](/src/web/routes.md)
- [Estilos Globais](/src/web/globalStyles.md)

# Comandos utilizados nesse artigo

```
yarn global add create-react-app
create-react-app my-app-teste
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
yarn add prop-types
```
