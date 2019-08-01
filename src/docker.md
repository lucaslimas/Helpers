# Docker

Docker é uma plataforma Open Source escrito em Go, que é uma linguagem de programação de alto desempenho desenvolvida dentro do Google, que facilita a criação e administração de ambientes isolados.

O Docker possibilita o empacotamento de uma aplicação ou ambiente inteiro dentro de um container, e a partir desse momento o ambiente inteiro torna-se portável para qualquer outro Host que contenha o Docker instalado.

Isso reduz drasticamente o tempo de deploy de alguma infraestrutura ou até mesmo aplicação, pois não há necessidade de ajustes de ambiente para o correto funcionamento do serviço, o ambiente é sempre o mesmo, configure-o uma vez e replique-o quantas vezes quiser.

Outra facilidade do Docker é poder criar suas imagens (containers prontos para deploy) a partir de arquivos de definição chamados Dockerfiles (veremos isso melhor em posts futuros).

Não podemos nos esquecer também de que o Docker utiliza como backend default o LXC, com isso é possível definir limitações de recursos por container (memória, cpu, I/O, etc.)

Referência [Mundo Docker](https://www.mundodocker.com.br/o-que-e-docker/)

# Instalação

Criar uma conta no site do docker e baixar a versão do sistema operação.

Referência [Docker](https://www.docker.com/docker-community)

[Windows](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)

[MacOS](https://download.docker.com/mac/stable/Docker.dmg)

Selecionar a caixa de seleção **Use Windows constainers instead of Linux...**

Após a instalação, para verificar se a instalação foi bem sucedida, digite:

```
docker -v
```

> A versão do docker deve ser exibida

É necessário habilitar a virtualização do computador (Hyper-V).

Em recursos do windows, verifica se está habilitado o Hyper-V

# Erros

Caso não funcione o docker siga os seguintes passos:

- Abra o PowerShell como administrador e execute:

```
dism /Online /Enable-Feature:Microsoft-Hyper-V /All
```

ou

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

Reinicie a máquina e caso ainda continue com problema de **elevação**, execute o comando no powershell como administrador:

```
bcdedit /set hypervisorlaunchtype auto
```

Caso continue com erro acesse o site [Intel](https://software.intel.com/en-us/intel-system-studio-docker-install-windows-troubleshoot-docker-for-windows)

# Configurando o Docker

Após a instalação é necessário vincular a conta criada no docker instalado.

- Clique com o botão direito do mouse no ícone do docker na barra de tarefas do windows.
- Clique em **Sign in / Create Docker ID...**
- Informe as Credenciais.

# Comandos do Docker

Exibir as imagens que estão em execução

```
docker ps
```

Exibir todas as imagens

```
docker ps --all
```

Para a imagem

```
docker stop NOME-IMAGEM
```

Iniciar a Imagem

```
docker start NOME-IMAGEM
```

Apagar imagem

```
docker rm NOME-IMAGEM
```

> Necessário estar parado a imagem

Outros comandos

Referência [comandos docker](https://medium.com/@fannyvieira/docker-basic-comands-7e5da6dec6d1)

# Instalação Docker Toolbox

Outra opção do docker é o docker toolbox, caso esteja usando o Windows e não funcione o Docker, instale a versão toolbox.

[Docker Toolbox](https://github.com/docker/toolbox/releases/tag/v18.09.3)
