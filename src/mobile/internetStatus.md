[Voltar](/Readme.md)

# Status da Internet

Por padrão o IOs já permite a verificação do status da conexão com a internet, porém no android, é necessário adicionar a permissão para acessar o estado da internet.

Acessar o arquivo manifest do android e incluir a permissão:

```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

Após a inclusão, é necessário executar o comando run-android para atalizar as permissões.

```
react-native run-android
```

# NetInfo

Para obter informações sobre o conneção com a internet, como o tipo de banda(3g, 4g, etc.) ou se está conectado na internet, é necessário usar o pacote **@react-native-community/netinfo**, porém a versão utilizada será a versão 3.2.1, pois a mais atual não está funcionando na versão do android.

```
yarn add @react-native-community/netinfo@3.2.1
```

Após a instalação do pacote, fazer o link do pacote

```
react-native link @react-native-community/netinfo@3.2.1
```

E enviar novamente o app para o aplicativo

```
react-native run-android
```

Para saber em tempo real qualquer alteração no status de conexão, é necessário adicionar o listener **connectionChange** na montagem do componente e na desmontagem remover o listener.

# Exemplo

```js
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default function online() {
  const [status, setStatus] = useState(false);

  const changeConnection = isConnected => {
    setStatus(isConnected);
  };

  useEffect(() => {
    NetInfo.isConnected.addEventListener("connectionChange", changeConnection);
    NetInfo.isConnected.fetch().done(isConnected => {
      setStatus(isConnected);
    });

    return () => {
      NetInfo.isConnected.removeEventListener(
        "connectionChange",
        changeConnection
      );
    };
  }, []);
  return <View>{status === false && <Text>Offline</Text>}</View>;
}
```

Referência [NetInfo](https://www.npmjs.com/package/@react-native-community/netinfo)

# Comandos utilizados nesse artigo

```
yarn add @react-native-community/netinfo@3.2.1
react-native link @react-native-community/netinfo@3.2.1
react-native run-android
```
