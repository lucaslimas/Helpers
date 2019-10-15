[Voltar](/Readme.md)

# VSCode

Configurações do VSCode

## Editando as configurações

Para alterar as configurações do VSCode, como tamanho da fonte, fonte utilizada, etc, acesse o arquivo de configuração do vscode apertando:

```
CTRL + SHIFT + P
```

Procure pela configuração

```
Open Settings (JSON)
```

Informe os seguintes propriedades:

```json
{
  "workbench.colorTheme": "Dracula",
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 24,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "workbench.iconTheme": "material-icon-theme",
  "editor.rulers": [
    80,
    120
  ],
  "editor.tabSize": 2,
  "editor.renderLineHighlight": "gutter",
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "nunjucks": "html"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "nunjucks": "html"
  },
  "javascript.updateImportsOnFileMove.enabled": "never",
  "breadcrumbs.enabled": true,
  "editor.parameterHints.enabled": true,
  "javascript.suggest.autoImports": false,
  // "prettier.eslintIntegration": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "explorer.confirmDelete": false,
  "files.autoSave": "off",
  "window.zoomLevel": -1,
  "editor.formatOnSave": false,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "workbench.startupEditor": "welcomePage",
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  }
}
```

## Instalando o prettier 

Aperte CTRL + P  e cole a seguinte linha: 
```
ext install esbenp.prettier-vscode
```

Pressione enter para instalar.