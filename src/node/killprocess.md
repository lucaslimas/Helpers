# Removendo processo vinculado a porta do windows

Listar serviços de uma determinada porta.

```cmd
netstat -ano | findstr :<PORT>
```

Exemplo visualizar qual serviço está executando na porta 7000

```cmd
  netstat -ano | findstr :7000
```

Retorno do comando 

```cmd
TCP    127.0.0.1:7000         0.0.0.0:0              LISTENING       2996
```

Comando para excluir o serviço da porta

```cmd
taskkill //PID <PID> //F
```

Excluir o serviço na porta 7000

```cmd
taskkill //PID 2996 //F
```

