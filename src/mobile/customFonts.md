[Voltar](/Readme.md)

# Fontes Customizadas

- Criar a pasta **assets** na raiz da aplicação;
- Criar a pasta **fonts** dentro de **assets**; **ATENÇÃO** o Nome da pasta tem que ser **fonts** (em inglês).
- Copiar as fontes que deseja para dentro da pasta **fonts**;
- Incluir no arquivo **package.json**

```
"rnpm":{
  "assets":["./assets/fonts/"]
},
```

**ATENÇÃO** na versão do react acima do 0.59.0, deve ser criado o arquivo **react-native.config.js**

```
module.exports = {
  assets: ['./assets/fonts/'], // stays the same
};
```

[React-native community](https://github.com/react-native-community/cli/blob/master/docs/configuration.md)

- Executar o comando:

```
react-native link
```

- Informar o nome exatamente como foi copiado, sem a extensão do arquivo;

```css
div {
  font-family: "Montserrat-light";
}
```

- Executar o comando

```
react-native run-android
```

- Caso aconteça algum erro, execute:

```
react-native start --reset-cache
```
