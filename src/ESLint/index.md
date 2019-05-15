[Voltar](/Readme.md)

# Configurando ESLint

ESLint é um gerenciador de código, deixando todos os códigos feitos por diversos desenvolvedores com o mesmo padrão. Isso garante uma padronização no código fonte da aplicação independentemente do desevolvedor.

## Instalando ESLint

Necessário estar com as extensões **eslint** e **prettier** instaladas no vscode. Veja [Instalando as extensões eslint e prettier](src/extentions/index.md).

Adicionar o pacote eslint em modo de desenvolvimento

```
yarn add eslint -D
```

Iniciar o eslint

```
npx eslint --init
```

---

Nesse momento será exibido no terminal algumas perguntas para que o eslint entenda qual será o padrão de código que será utilizado no projeto.

### How would you like to use ESLint?

- [ ] To check syntax only
- [ ] To check syntax and find problems
- [x] To check syntax, find problems, and enforce code style

### What type of modules does your project use?

- [ ] JavaScript modules (import/export) **(React | React-Native)**
- [ ] CommonJS (require/exports) **(Node)**
- [ ] None of these

> Caso esteja em um projeto node, utilize a segunda opção, caso seja um projeto React ou ReactNative usar a primeira opção.

### Which framework does your project use?

- [ ] React **(React | React-Native)**
- [ ] Vue.js
- [ ] None of these **(Node)**

> Caso esteja em um projeto node, utilize a terceira opção, caso seja um projeto React ou ReactNative usar a primeira opção.

### Where does your code run?

- [ ] Browser **(React.js)**
- [ ] Node **(node)**

> Caso esteja em um projeto node, utilize a segunda opção, caso seja um projeto React marque a primeira oopção, caso seja ou ReactNative deixa sem marcar as duas opções.

### How would you like to define a style for your project?

- [x] Use a popular style guide
- [ ] Answer questions about your style
- [ ] Inspect your JavaScript file(s)

### Which style guide do you want to follow?

- [x] Airbnb (https://github.com/airbnb/javascript)
- [ ] Standard (https://github.com/standard/standard)
- [ ] Google (https://github.com/google/eslint-config-google)

### What format do you want your config file to be in?

- [ ] JavaScript
- [ ] YAML
- [x] JSON

### Would you like to install them now with npm? (Y/n)

- Y

> Y para informar que deseja utilizar o npm para instalação dos pacotes

---

Após a instalação dos pacotes, remova o arquivo **package-lock.json** e execute o comando

```
yarn
```

Isso atualizará os pacotes conforme o instalador yarn

---

# Comandos utilizados nesse artigo

```
yarn add eslint -D
yarn eslint --init
yarn
```
