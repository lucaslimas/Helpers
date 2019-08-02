[Voltar](/Readme.md)

# Fontes Customizadas

- Criar a pasta **assets** na raiz da aplicação;
- Criar a pasta **fonts** dentro de **assets**;
- Copiar as fontes que deseja para dentro da pasta **fonts**;
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
