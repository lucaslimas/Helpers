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
pm2 start src/index.js -name "Serviço Name"
```

Salvar a lista após a inclusão

```
pm2 save
```

Para incluir no boot na máquina e reiniciar sempre que for reiniciado o servidor linux

```
pm2 startup
```

## Servidor Windows
Necessário instalar o pm2-windows-startup 
```
npm install pm2-windows-startup -g
pm2-startup install
```
