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

Salvar a lista após a inclusão

```
pm2 save
```

para incluir no boot na máquina e reiniciar sempre que for reiniciado a máquina

```
pm2 startup
```
