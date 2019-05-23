[Voltar](/Readme.md)

# Configurações Iniciais

Para iniciar um projeto React-Native padrão, basta executar o comando

```
react-native init nome-do-app
```

> Toda a estrutura básica será criada para seu aplicativo

Acessa a pasta do aplicativo.

Abra o emulador [genymotion](/src/mobile/genymotion.md) e execute o comando:

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

Veja [Configurando o Eslint](/src/eslint.md)

Após a configuração do eslint, adicione na propriedade rules o seguinte código:

```json
"rules": {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "global-require": "off",
      "react/jsx-filename-extension": [
        "error",
        {
          "extensions": [".js", ".jsx"]
        }
      ],
      "import/prefer-default-export": "off"
    }
```

Configure o vscode para garantir o padrão no ambiente de desenvolvimento.

Veja [Configurando EditorConfig](/src/editorConfig.md)

Agora é necessario configurar o babel-root-import, para que o aplicativo entenda o caminho relativo da aplicação

Veja [Configurando Babel Root Import](/src/mobile/babelrootimport.md)

# Configure Debugs

---

- [DebugJS](/src/mobile/debugjs.md)
- [Reactotron](/src/mobile/reactotron.md)
- [React DevTools](/src/mobile/devtools.md)

---

# Comandos utilizados nesse artigo

```
react-native init nome-do-app
react-native start
react-native start --reset-cache
```
