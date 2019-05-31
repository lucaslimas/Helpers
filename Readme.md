# Arquivo de Ajuda

Configurações Iniciais

- Instalar [Node Version Manager - NVM](/src/nvm.md)
- Instalar o [Yarn](https://yarnpkg.com/en/)
- Instalar extensões **EditorConfig**, **eslint** e **prettier code formater**

> CTRL + SHIFT + P  
> Opção -> Open Settings (JSON)

```json
{
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 24,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "editor.formatOnSave": true,
  "editor.rulers": [80, 120],
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

  "prettier.eslintIntegration": true,

  "explorer.confirmDelete": false,
  "files.autoSave": "off",
  "window.zoomLevel": -1,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue"
}
```

## Server

- Configurando Ambiente de desenvolvimento
- [Adonis](/src/node_adonis.md)
- [Express](/src/node_express.md)
- [Sequelize](/src/sequelize.md)
- [PostgresSQL](/src/postgresSQL.md)
- [Babel Root Import](/src/mobile/babelrootimport.md)
- [Windows Service](/src/windows_service.md)

## Mobile

- Criando Ambiente de desenvolvimento
- Genymotion
- Debug no Celular
- [Configurações Iniciais](/src/mobile/initial.md)
- [DebugJS](/src/mobile/debugjs.md)
- [Reactotron](/src/mobile/reactotron.md)
- [React DevTools](/src/mobile/devtools.md)
- [Babel Root Import](/src/mobile/babelrootimport.md)
