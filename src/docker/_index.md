# WSL 2 - Windows Sybsystem for Linux 2

Em 2016, a Microsoft anunciou a possibilidade de rodar o Linux dentro do Windows 10 como um subsistema e o nome a isto foi dado de WSL ou Windows Subsystem for Linux.

O acesso ao sistema de arquivos no Windows 10 pelo Linux era simples e rápido, porém não tinhamos uma execução completa do kernel do Linux, além de outros artefatos nativos e isto impossibilitava a execução de várias tarefas no Linux, uma delas é o Docker.

Em 2019, a Microsoft anunciou o WSL 2, com uma dinâmica aprimorada em relação a 1ª versão:

- Execução do kernel completo do Linux.
- Melhor desempenho para acesso aos arquivos dentro do Linux.
- Compatibilidade completa de chamada do sistema.

O WSL 2 já estava disponível na versão Insider do Windows 10, mas na última semana de maio de 2020 passou a estar disponível em final release na atualização 20.04 do Windows 10.

Atualização A partir de 21 de agosto de 2020, o WSL 2 também está disponível nas edições 1903 e 1909, porém somente em sistemas x64.

Com WSL 2 é possível executar Docker no Linux usando o Windows 10.

- Execução completa do Kernel do Linux.
- Manipulação através do terminal, não há GUI.
- Grande desempenho executando aplicativos dentro do Linux.
- Suporte ao Docker e Kubernetes.
- usa o Virtual Macheine Platform como base para a execução

# Instalando o WSL 2 no Windows HOME ou PRO

Requisitos:

- Versao do windows >= 19.03.
- 4 GB RAM (preferência 8 GB).
- Virtual Machine Platform habilitado.

Acesse o [guia de instalação](https://github.com/codeedu/wsl2-docker-quickstart ) do WSL 2 e do Docker.

# Instalando o ubuntu

Pesquisar na loja da microsoft o **ubuntu** e instalar.

Configure um usuário e senha.

Após a instalação, para acessar o WSL no windows, pesquise pelo WSL.

# Instalando o  Windows Terminal

O Windows Terminal permite abrir multiplas abas de terminais para executar diversos terminais em abas diferentes.


Pesquisar na loja da microsoft o **windows terminal** e instalar.

Copie o [arquivo de configuração](https://github.com/codeedu/wsl2-docker-quickstart/blob/master/windows-terminal-settings.json) do Windows Terminal e acessa a configurações do terminal e cole o conteúdo e salve.

> Altera o usuário **argen** do caminho **startingDirectory** paro o usuário padrão do computador

## Comandos básicos

No terminal do ubuntu, existe a pasta *mnt* que estão todos os dados do windows para acesso pelo linux, ou seja, é possível acessar dados do windows dentro do linux através do **mnt**.

Exemplo.

Exibe todos os drivers do computador

```
cd /mnt
```

Acessa todos os arquivos e pastas do Drive C:

```
cd /mnt/c
```

Para abrir a pasta que está acessando no terminal linux no explorer do windows, basta digitar **explores.exe .** que a pasta atual que está acessando no terminal será aberta no windows.

```
lucaslimas@HomeLucas:/mnt/c/users$ explorer.exe .
```

## Windows acessando as pastas do Linux

Para ter acesso as pastas e arquivos que estão dentro do wsl, basta acessar o explorer e acessar o seguinte diretório

```
\\wsl$
```

# Extensões para o Visual Studio Code 

- Remote Development  (Extensão que permite abrir o vscode do terminal do **wsl**)

# Docker

Faço o [download](https://www.docker.com/products/docker-desktop) do docker-desktop.

- Em configurações do Docker Desktop, habilitar a opção **Use WSL 2 Based Engine** em General.
- Em Resources, WSL integration, habilite a opção **Enable integration with my default WSL distro** e habilite os WSL intalados que deseja ter a integração com WSL


## Configurando o build do docker no ubuntu

Acesse o terminal do ubuntu no diretório **~**
```
cd /~
```
Abra o arquivo **.profile** e acrescente no final do arquivo o **export DOCKER_BUILDKIT=1** 

```
vim .profile
```

> Aperte a tecla **i** para inserir dados no arquivo e depois da edição aperte **ESC** para sair do modo de edição. Aperte **SHIFT + :** e digite **wq** para salvar e sair do arquivo.


# Comandos básicos do Docker

Para exibir os containers ativos na máquina
```
docker ps
```

Exibir todos os containers
```
docker ps -a
```

Iniciar um container
```
docker start {container-id ou container-name}
```

Parar um container
```
docker stop {container-id ou container-name}
```

Remover um container 
```
docker rm {id do container}
```

Remover um container que está rodando  
```
docker rm {id do container} -f
```

## Executando um container

Para executar um container é necessário informar o nome da imagem, para que seja possível criar um container na máquina.

```
docker run ubuntu
```

Esse comando irá verificar se já existe a imagem **ubuntu** localmente (caso não exista ele irá baixar) e cria o container ubuntu baseado na imagem **ubuntu**

> Acesse o site [dockerhub](https://hub.docker.com/) para verificar as imagens disponíveis.

Outro ponto importante é a versão da imagem que será utilizada, a versão é chamada de TAG dentro do Docker Hub, podemos ter diversas versões da imagem que queremos utilizar e essas versões é possível visualizer dentro do site do docker, cada versão pode ter sua particularidade, umas podem ter um serviço diferente, ou correção bugs, etc. 

Sempre que indicamos o nome da imagem e não é informado a versão, automaticamente ele baixa a versão chamada **latest**.

```
docker run ubuntu
```

igual 
```
docker run ubuntu:latest
```
> Repare que a versão da imagem é indicado após o nome da imagem

### Imagem oficial e imagem de terceiros

Quando pesquisamos as imagens disponíveis, existem imagens que o seu nome possue uma barra **/**, essas imagens são imagens criadas por outras pessoas.

Exemplo:

```
docker run nodered/node-red
```

> Essa é uma imagem **node-red** da empresa **nodered**.

```
docker run node
```

> Essa é uma imagem **node** oficial

## Nomeando um container

Quando criamos um container, por padrão é gerado um id e nome para ele, porém o nome é um nome aleatório e por boas práticas, é comum nomear esse container facilitando encontrar ele na lista de containers rodando. Para isso utilizamos o parâmetro **--name**

```
docker run --name webserver nginx
```

## Entrando dentro do container

O parâmetro **-it** permite acessar o container de forma iterativa, ou seja, permite entrar e executar comandos dentro do seu terminal.

```
docker run -it ubuntu bash
```
> Esse comando irá criar o container e entrar em modo iterativo assim que o container for criado

Para entrar em um container que já está rodando é necessário utilizar o commando **exec**, que permite executar comandos dentro do nosso container

```
docker exec -it ubuntu bash
```

> O comando exec executa comandos dentro do container

O parâmetro -it é a junção do -i, que segura a sessão do container e o -t q é o tty que permite digitar comandos e por último é o parâmetro bash, que é o terminal que será usado para digitar os commandos


## Redirecionamento de Portas

Redirenciona a porta 8080 da máquina com a porta 80 do container

```
docker run -p 8080:80 nginx
```

O commando irá baixar a imagem do nginx e irá executar o container redirecionando a porta 8080 da máquina local para a porta 80 do container.

## Rodando o container em background

Quando executamos o container e ele está em modo iterativo, o container fica rodando normalmente, porém quando saimos do modo iterativo o container ele é parado. A maioria das vezes, precisamos que o container continue rodando mesmo sem a execução do terminal e isso é possível com o parâmetro **-d** (detach), ele inicia o container e deixa ele executando desatachado ao terminal, ou seja, em background.

```
docker run -d -p 8080:80 nginx
```

## Bind Mount x Volume

Um container é imutável, ou seja, tudo que criamos ou editamos dentro dele será permido se o container for removido e criado novamente.
Em alguns casos não queremos perder os dados na remoção do container, para isso utilizamos o conceito de volume que permite 'compartilhar' acesso dados da máquina local com o container.

Para persistir um dado mesmo que o container seja removido usamos o conceito de Bind Moutn ou Volume.

### Bind Mount

Permite fazer o **Bind** de pastas ou arquivos com o container 

```
docker run -d --name nginx -p 8080:80 -v caminhoPastaArquivo:caminhoPastaDocker
```

### Volume

Permite criar um volume local na máquina e compartilhar com o container, como se fosse dar um nome para um local específico e não precisar passar o caminho sempre que fizer o bind

O Comando abaixo permite visualizar os comandos possíveis para trabalhar com volumes

```
docker volume
```










