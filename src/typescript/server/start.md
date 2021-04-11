# Iniciando Projeto

Abra a pasta onde quer iniciar o projeto e execute o comando para criar o arquivo **package.json**.

```cmd
yarn init
```

Caso queria iniciar o arquivo com as configurações padrões, execute o comando: 

```cmd
yarn init -y
```

Abra a pasta no VSCode

## Instalando o Typescript

Para utilizar o typescript, é necessário instalar o pacote **typescript** em modo de desenvolvimento. O pacote é instalado como desenvolvimento, pois typescript é utilizado somente enquanto estamos desenvolvendo nossa aplicação, ou seja, no final os arquivos typescripts serão transformados em arquivos javascript, indo para a produção somente arquivos **.js**. Veremos isso mais adiante.

```cmd
yarn add typescript -D
```

Após a instalação do pacote é necessário iniciar o typescript no código, para isso utilizamos o comando

```cmd
yarn tsc --init
```
> Será criado o arquivo **tsconfig.json** que contém todas as configurações de como o typescript vai ser executado dentro do ambiente

Altere o arquivo **tsconfig.json** informando onde estarão os arquivos base da aplicação e qual a pasta será utilizada para guardar os arquivos transformados (build).

```json
"outDir": "./dist",                        /* Redirect output structure to the directory. */
"rootDir": "./src",                        /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
```

## Criando a estrutura do projeto

. Instale o pacote **express**. 
```cmd
yarn add express
```
- Crie a pasta **src** na raiz do projeto. Nessa pasta irá conter todo o código da nossa aplicação.
- Crie o arquivo **server.ts** que será o responsável pela criação do serviço express da nossa aplicação.
```ts
import express from 'express';
```
> Utilizando o typescript, podemos utilizar a última sintáxe disponível do javascript para construir nosso código.

Sempre que utilizamos o typescript e importamos um pacote, caso esse pacote não contém por padrão uma declaração de tipos no seu pacote, será necessário instalar o pacote de tipos desse pacote. Sempre iremos instalar em modo de desenvolvimento, lembrando que typescrip é utilizado somente em desenvolvimento.

- Instale o pacote de tipagem do express em desenvolvimento, que nos permite ter acesso a .
```cmd
yarn add @types/express -D
```

Arquivo **server.ts**

```ts
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World');
})

app.listen(3333, ()=>{
  console.log('Server started at http://localhost:3333');
});
```

## Iniciando o serviço

Para testar essa aplicação precisamos converter os arquivos **ts** para arquivos javascript, pois o node não executa arquivos typescript. Para converter os arquivos utilizamos o comando 
```cmd
yarn tsc
```
> Será criado a pasta dist com o código transpilado

Execute o comando para iniciar o serviço

```cmd
node dist/server
```

Na janela de console do VSCode irá conter a informação
```
Server started at http://localhost:3333
```

Segure o CTRL e clique na url informada. Você verá o texto **Hello World** no seu navegador.

# Comando Utilizados
```
yarn init -y
yarn add typescript -D
yarn tsc --init
yarn add express
yarn add @types/express -D
yarn tsc
node dist/server
```