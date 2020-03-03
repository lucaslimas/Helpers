[Referência](https://www.npmjs.com/package/pm2)

Instalar globalment o pm2

```
npm install pm2 -g
```

Listar os programas:

```
$ pm2 list
```

Outros comandos:

```
pm2 start    <app_name|id|'all'|json_conf>
pm2 stop     <app_name|id|'all'|json_conf>
pm2 restart  <app_name|id|'all'|json_conf>
pm2 delete   <app_name|id|'all'|json_conf>
```

Adicionando um serviço
```
pm2 start src/index.js --name ServicoName
```

Renomeando um serviço
```
pm2 restart id --name newName
```

Salvar a lista após a inclusão

```
pm2 save
```

# Inicializar o PM2 com boot da mãquina

Sempre que o computador for reiniciado, o pm2 não iria iniciar sozinho. Para iniciar o PM2 junto ao sistema operacional, execute os passos conforme o seu sistema operacional


## Servidor Windows

Necessário instalar o pm2-windows-startup para o Windows
```
npm install pm2-windows-startup -g
pm2-startup install
```

## Linux

Para incluir no boot na máquina do linux

```
pm2 startup
```

