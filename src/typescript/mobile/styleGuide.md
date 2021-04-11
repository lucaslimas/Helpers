# Padrões de Estilos

Antes de instalar os pacotes, certifique que não esteja executando o projeto.

## Eslint

Instalar o eslint

```
yarn add eslint -D
```

Executar o eslint
```
yarn eslint --init
```

Adicionar o arquivo **eslintrc.json** na raiz da aplicação

```json
{
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "jest": true
  },
  "extends": [
    "airbnb",
    "plugin:react-native/all",
    "prettier",
    "prettier/react"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "__DEV__": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "react-native", "jsx-a11y", "import", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "react-native/no-color-literals": "off",
    "react-native/sort-styles": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "react/jsx-filename-extension": [ 1, {"extensions": [".tsx"]}],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

Adicionar o arquivo **.eslintignore** na raiz da aplicação

```conf
**/*.js
node_modules
build
```
> Dessa forma apenas os arquivos da aplicação será verificado as regras de estilos

## Prettier

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
yarn add eslint-import-resolver-typescript -D
```

Adicionar o arquivo **.prettierrc** na raiz do projeto

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2
}
```

## EditorConfig

Adicionar o arquivo **.editorconfig**  na raiz da aplicação

```conf
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = crlf
```

> Após a instalação da guia de estilos do código, reinicie o vscode, apertando CTRL + SHIFT + P  e buscar por **reload window** opção do desenvolver.