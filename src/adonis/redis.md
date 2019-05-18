[Voltar](/src/adonis/index.md)

# Redis

O Redis é um armazenamento de dados de valor-chave em rede, de código aberto, na memória, com durabilidade opcional. Está escrito em ANSI C. O desenvolvimento do Redis é patrocinado pela Redis Labs hoje; antes disso, foi patrocinado pela Pivotal e pela VMware. De acordo com o ranking mensal da DB-Engines.com, Redis é a loja de valor-chave mais popular. O nome Redis significa REmote DIctionary Server.

Referência [Docker Redis](https://hub.docker.com/_/redis)

## Instalação

### Windows

### Docker

```
docker run --name redis -p 6379:6379 -d redis:alpine
```

> --name para definir o nome, -p para redifinir a porta do redis para a porta do computador -d para rodar em background e redis:alpine é o nome da imagem a ser utilizada

## Configuração

Instalar o pacote redis

```
adonis install @adonisjs/redis
```

Adicionar o provider

```
'@adonisjs/redis/providers/RedisProvider'
```

> As configurações no arquivo **redis.js** dentro da pasta **config**

Referência [Adonis Redis](https://adonisjs.com/docs/4.0/redis)

## Controlador da Fila

Instalar adonis-kue

```
npm install adonis-kue
```

Adicionar o provider

```
'adonis-kue/providers/KueProvider'
```

Adicionar o aceProviders

```
'adonis-kue/providers/CommandsProvider'
```

> AceProviders habilita alguns comandos na interface de linha de comando

## Criando Job

Criar job com a interface de linha de comando

```
adonis make:job NomeJob
```

Será criado o arquivo **NomeJob.js** dentro da pasta **jobs** da pasta **app/jobs**

Adicionar o job criado no arquivo de configuração da aplicação.
Dentro do arquivo **app.js** da pasta **start**, incluir o job

```js
const jobs = ["App/Jobs/NomeJob"];
```

Adicionar para exportar o array de jobs

```js
module.exports = {
  ...jobs
};
```

## Configurando o JOB

Dentro do arquivo de job, existem 3 métodos, concurrency, key e handle.

- Concurrency: determina quantos jobs eu quero processar simultaneamente
- Key: é a chave do job na aplicação
- Handle: é a lógica do job

```js
class NomeJob {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency() {
    return 1;
  }

  // This is required. This is a unique key used to identify this job.
  static get key() {
    return "NomeJob-job";
  }

  // This is where the work is done.
  async handle(data) {
    console.log("NomeJob-job started");
  }
}

module.exports = NomeJob;
```

## Executando um job

Importar o **Kue** e **Job**

```js
const Kue = use("kue");
const Job = use("App/Jobs/NomeJob");
```

Para executar

```js
  const data = { ... }
  Kue.dispatch(Job.key, data, config);
```

A terceira propriedade são as configurações para execução do job e podem ter os seguintes parametros:

```js
const priority = "normal"; // Priority of job, can be low, normal, medium, high or critical
const attempts = 1; // Number of times to attempt job if it fails
const remove = true; // Should jobs be automatically removed on completion
const jobFn = job => {
  // Function to be run on the job before it is saved
  job.backoff();
};
```

Agora é necessario iniciar o **kue** para que fique ouvindo as filas de mensagem

```
adonis kue:listen
```

Referência [Nrempel kue](https://github.com/nrempel/adonis-kue)
Referência [Adonis Kue](https://www.npmjs.com/package/adonis-kue)

# Comandos utilizados nesse artigo

```
docker run --name redis -p 6379:6379 -d redis:alpine
adonis install @adonisjs/redis
npm install adonis-kue
adonis make:job NewTaskMail
```
