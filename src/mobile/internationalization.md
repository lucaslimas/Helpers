[Voltar](/Readme.md)

# Internacionalização (i18n)

É a construção do aplicativo, com os texto exibidos conforme o idioma do celular.

## i18n

O conceito de internacionalização ou i18n (que, por vezes, também é chamado de "Localização") consiste no desenvolvimento e/ou adaptação de um produto para o idioma de um ou mais países. O acrônimo "i18n" origina-se do inglês "internationalization", onde 18 é o número de letras entre o primeiro "i" e o último "n".

## Configurando

Instalar o pacote **i18n-js** para controlar as traduções do aplicativo.

```
yarn add i18n-js
```

- Criar a pasta **locales** dentro da pasta **src**
- Criar o arquivo **index.js** na pasta **locales**

```js
import { Platform, NativeModules } from "react-native";
import I18n from "i18n-js";
import en from "./en-US";
import pt from "./pt-BR";

const normalizeTranslate = {
  en_US: "en_US",
  pt_BR: "pt_BR",
  en: "en_US",
  pt_US: "pt_BR"
};

const getLanguageByDevice = () => {
  return Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

I18n.fallback = true;

I18n.translations = {
  en_US: en,
  pt_BR: pt
};

const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(
    translateNormalize
  );
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = "en_US");
};

setLanguageToI18n();

export const translate = key => I18n.t(key);
```

- Criar o arquivo **pt-BR.js** na pasta **locales**

```js
const pt = {
  UserName: "Nome do Usuário",
  UserPassword: "Senha do Usuário",
  Enter: "Entrar"
};

export default pt;
```

- Criar o arquivo **en-US.js** na pasta **locales**

```js
const en = {
  UserName: "User Name",
  UserPassword: "User Password",
  Enter: "Enter"
};

export default en;
```

## Usando as Traduções

Para utilizar o arquivo de traduções, importar o arquivo index da pasta locales

```js
import { translate } from "../../locales";
```

Obter a informação utilizando o comando

```jsx
<Text>{translate("LoginInformation")}</Text>
```
