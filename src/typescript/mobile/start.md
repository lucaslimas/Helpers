# React Native 

## Instalando o Ambiente

Antes da instalação do ambiente, certifique que a versão do pacote **react-native-cli** não esteja instalado globalmente (nas versões antigas era instalado globalmente), pois isso tem causado alguns erros nas aplicações.

Para remover, caso esteja instalado, utilize o comando: 

```cmd
yarn global remove react-native-cli
```

Instalar o novo react-native global
```
yarn global add @react-native-community/cli
```

Seguir os passos do conteúdo do [site da rocketseat ](https://react-native.rocketseat.dev/), seguindo os passos de acordo com o ambiente que deseja instalar.

> IOs é necessário ter o xcode configurado no mac e Android (windows, linux, macox) é necessário ter o SDK do android

## Iniciando projeto

Para iniciar um projeto react-native utilizando typescript, execute o comando:

```
npx react-native init nomeprojeto --template react-native-template-typescript
```

> o nome do projeto não pode ter caracteres especiais e nem letras caixa altas.

Após o criação do projeto, o nome da pasta pode ser alterado conforme o padrão que deseja adotar para o projeto.

Acesse o projeto com o visual studio e rode o comando:

```
yarn android
```
> Necessário o emulador estar aberto

ou

```
yarn ios
```
> Caso o emulador não esteja aberto, ele irá abrir. Esse comando é aceito apenas no Mac.

Na primeira execução do comando, o processo irá demorar alguns minutos. Nas próximas execuções o processo será mais rápido.

Uma vez carregado o projeto para dentro do emulador, nas próximas execuções, não será mais necessário executar o comando **yarn android**, apenas execute o comando o **yarn start**, desssa forma será mais rápida a inicialização.

> O comando yarn android é utilizado pra fazer uma instalação do aplicativo no emulador, quando ele já está instalado, esse comando só será necessário novamente caso tenha alterado algum código nativo do android ou ios, caso contrário, apenas o comando start será suficiente.

### Android Studio

Para que o emulador do android fique sempre na frente de qualquer janela aberta no computador, clique nos **...** da barra lateral do emulador, acesse o menu **Settings** e habilite a opção **Emulator always on top**.

## Estruturando o projeto

Criar a pasta **src** na raiz do projeto e adicionar o arquivo **App.tsx**

```tsx
import React from 'react';
import {View, Text} from 'react-native';
const App: React.FC = () => (
  <View>
    <Text>Página Inicial</Text>
  </View>
);
export default App;
```

Alterar o apontamento do arquivo inicial para a nova página. Acesse o arquivo **index.js** e altera para buscar o novo arquivo App.tsx da pasta **src**.

```js
import App from './src/App';
```

Remover os arquivos da raiz da aplicação:
- **App.tsx** 
- **.eslintrc.js** (iremos configurar o novo padrão mais adiante)
- **.prettierrc.js** 