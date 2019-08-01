[Voltar](/Readme.md)

# Status Bar

Para configurar a cor da barra de status no aplicativo, é necessário importar o StatusBar para configurar as cores

```jsx
import { StatusBar } from "react-native";
```

Após a importaçoes, incluia o StatusBar no arquivo inicial da aplicação:

```jsx
<StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
```

> Colocando na arquivo de rotas, a statusBar será aplicado a todas páginas

Quando informar transparente e translucent, todo o conteúdo do app irá sobrepor a barra de status, dessa forma será necessário a utilização do pacote **react-native-status-bar-height** para calcular o tamnho da barra de status. No seu arquivo de estilos, basta utilizar:

Instalar o pacote

```
yarn add react-native-status-bar-height
```

Utilização:

```js
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  padding-top: ${getStatusBarHeight(true) + 25}px;
`;
```

Referência [StatusBar](https://github.com/ovr/react-native-status-bar-height)

# Comandos utilizados nesse artigo

```
yarn add react-native-status-bar-height
```
