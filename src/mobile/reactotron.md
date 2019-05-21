Em Construção

# Reactotron

O Reactotron é um aplicativo macOS, Windows e Linux para inspecionar seus aplicativos React JS e React Native.

Usado para:

- Ver o estado da sua aplicação
- Mostrar solicitações e respostas da API
- Execute benchmarks de desempenho rápido
- Inscrever-se em partes do seu estado de aplicativo
- Exibir mensagens semelhantes a console.log
- Rastreie erros globais com rastreamentos de pilha mapeados por origem, incluindo rastreios de pilha saga!
- Ações de despacho como um experimento de controle mental administrado pelo governo
- Hot swap o estado do seu aplicativo usando Redux ou mobx-state-tree
- Rastrear suas sagas
- Mostrar superposição de imagem em Reagir Nativa
- Rastrear seu armazenamento assíncrono no Reagir Nativo
- Você o conecta ao seu aplicativo como uma dependência de desenvolvimento, de modo que não acrescenta nada ao seu produto.

Referência [Reactotron](https://github.com/infinitered/reactotron)

# Instalando IDE

Baixe o release compatível com seu sistema operacional e instale o reactotron.

[Download](https://github.com/infinitered/reactotron/releases)

# Configurando

Instale o pacote do reactotron

```
npm i --save-dev reactotron-react-native
```

Criar o arquivo **ReactotronConfig.js** dentro da pasta **config**.

> Caso não tenha a pasta config, criar a pasta **src** na raiz do aplicativo e criar a pasta **config** para guardar todas as configurações do aplicativo.

Arquivo ReactotronConfig.js

```js
import Reactotron from "reactotron-react-native";

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
```

Referência [Reactotron](/src/mobile/reactotron.md)
