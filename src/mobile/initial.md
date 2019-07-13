[Voltar](/Readme.md)

# Configurações Iniciais

Adicionar de forma global o CLI do react-native

```
yarn global add react-native-cli
```

Para iniciar um projeto React-Native padrão, basta executar o comando

```
react-native init nome-do-app
```

> Versão 0.60 está com erro. Usar o comando **react-native init "nome-aplicacao" --version="react-native@0.59.10"**

Acessa a pasta do aplicativo.

Abra o emulador e execute o comando:

Android

```
react-native run-android
```

IOS

```
react-native run-ios
```

> Sempre que esse comando for executado pela primeira vez, o sistema levará um tempo para instalar toda a sua aplicação no emulador ou celular.

Esse comando deve ser executado sempre que tiver que instalar o aplicativo ou quando instalar algum pacote que necessite que faça um **link**.

> Essa informação está no site do fabricante, especificando que necessita ser feito o link.

Habilite o Live Reload, para que toda alteração no aplicativo seja refletida no celular ou emulador.

No android para habilitar o live reload, basta balançar o celular (shake) com o aplicativo aberto e habilitar.

Caso queria iniciar o projeto novamente, um projeto que já foi instalado no celular ou emulador, basta executar o comando:

```
react-native start
```

> Sempre execute os comandos dentro da pasta do aplicativo.

Em alguns momentos, mesmo com o ambiente configurado, após alguma alteração, seu aplicativo pode apresentar algum erro, isso pode ter ocorrido devido ao cache. Para limpar o cache execute:

```
react-native start --reset-cache
```

Após a criação da estrutura básica é uma boa prática configurar o ambiente de desenvolvimento para uma padronização de código. Para isso vamos usar o Eslint.

> Yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

Iniciar o ESLINT com o arquivo de configuração em Javascript. Veja [Configurando o Eslint](/src/eslint.md)

Alterar o arquivo **.eslintrc.js**

```js
module.exports = {
  env: {
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
  plugins: ["react"],
  rules: {
    "prettier/prettier": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".js"]
      }
    ],
    "import/prefer-default-export": "off"
  }
};
```

Configure o vscode para garantir o padrão no ambiente de desenvolvimento.

Veja [Configurando EditorConfig](/src/editorConfig.md)

Agora é necessario configurar o babel-root-import, para que o aplicativo entenda o caminho relativo da aplicação

Veja [Configurando Babel Root Import](/src/mobile/babelrootimport.md)

# Comandos utilizados nesse artigo

```
yarn global add react-native-cli
react-native init nome-do-app
react-native start
react-native start --reset-cache
```
