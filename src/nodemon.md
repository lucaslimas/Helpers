[Voltar](/Readme.md)

# Nodemon

Nodemon é um file watcher, que roda internamente o próprio comando node. Dessa forma toda e qualquer atualização é executada automaticamente, sem a necessidade de parar e rodar o node novamente.

## Instalando o Nodemon

Adicionar o pacote **nodemon** em modo de desenvolvimento

```
yarn add nodemon -D
```

Adicionar o seguinte script para inicialização do nodemon. Adicionar o script dentro do **package.json**

```json
"scripts": {
  "start": "nodemon src/index.js"
}
```

Por padrão utilizamos "start" no script, dessa forma quando executar o comando, não precisará escrever node index.js e sim yarn start.

```
yarn start
```

Para parar o monitoramento aperte

```
Ctrl + C
```
