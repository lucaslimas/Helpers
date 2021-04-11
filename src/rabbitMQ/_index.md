#### Referência: Curso de RabbitMQ da Code Education - Full Cycle 2.0 - 13/03/2021

# RabbitMQ

> É um software corretor de mensagens de código aberto (às vezes chamado de middleware orientado a mensagens ) que implementou originalmente o Protocolo de Enfileiramento de Mensagens Avançado (AMQP) e desde então foi estendido com uma arquitetura de plug-in para oferecer suporte ao Protocolo de Mensagens Orientadas a Texto Streaming (STOMP) , MQ Telemetry Transport (MQTT) e outros protocolos. [1] O programa de servidor RabbitMQ é escrito na linguagem de programação Erlang e é construído na estrutura da plataforma Open Telecom para clustering e failover. Bibliotecas de cliente para interface com o broker estão disponíveis para todas as principais linguagens de programação.

[Wikipedia](https://en.wikipedia.org/wiki/RabbitMQ)

Para um cliente utilizar o sistema de filas é necessário se conectar com um serviço de filas. Diferente de outras tipos de conexões, com o RabbitMQ a conexão permanece aberta durante todo o tempo, é uma conexão persistente, evidanto assim ter que se conectar diversas vezes.

Quando um cliente se conecta a um serviço de mensageria, ele cria sub conexões (**channel**) que será usada pra trafegar as informações.

Em uma mesma conexão podem existir diversos canais, conforme a necessidade.

```
Cliente => Conexão (Channel A, Channel B, Ch X) => Server
```

# Channel

É o canal onde as mensagem serão trafegadas.
O RabbitMQ é um sistema **Multiplexing Connections**, permite diversos canais de comunicações.

# Estrutura

```
Publisher => Exchange => Queue => Consumer
```

- **Publisher**: Sistemas (APIs) quem criam as mensagens. Publisher não envia mensagem para a fila, ele envia mensagem sempre a um **Exchange**, pois uma mensagem podem ser entregue a mais de uma fila.
- **Exchange**: Responsável por receber as mensagens dos **publishers** e encaminhar a uma ou mais filas (**queue**).
- **Queue**: Recebe as mensagens do **Exchange** e envia para os **consumers**. 
- **Consumer**: Sistemas (APIs) que recebem e processam as mensagens da **queue**.

Em geral são usadas 3 tipos de **Exchanges**:
  
  - **Direct**: A mensagem é enviada a uma fila específica que foi informada pelo **publisher** na prop **Routing Key**;
  - **Fanout**: A mensagem é enviada a todas as filas que estão conectadas (**Bind**) com o **exchange**;
  - **Topic**: A mensagem é enviada a todas as filas cuja a **Routing Key** esteja nas suas regras de recebimento da fila;

## Routing Key

Quando vinculamos, ou seja, criamos um relacionamento da **Queue** com um **Exchange**, estamos fazendo um **Bind** entre eles. Nesse momento é criado uma rota entre o **exchange** e a **queue** que chamamos de **Routing Key**.

## Queue

É uma estrutura de armazenagem de dados em fila, geralmente do tipo FIFO (First In, First Out), ou seja a primeira mensagem que entra é a primeira que sai.

Existem diversos comportamentos que uma fila pode ter dentro de uma aplicação conforme as suas propriedades.

Propriedades:

- **Durable**: Indica se a fila vai ser salva mesmo depois do restart do broker;
- **Auto-delete**: Quando o consumer se desconecta da fila, as mensagens são removidas;
- **Expiry**: Tempo de ociosidade da fila. Fila que está em X tempo sem receber mensagens ou sem ser consumida.
- **Mensagem TTL**: Tempo de vida da mensagem.
- **Exclusive**: Apenas publish do mesmo canal pode publicar;
- **Max length** ou **bytes**: Quantidade de mensagens ou tamanho dos bytes da mensagem, caso exceda haverá um **overflow**;
- **Overflow**: O que fazer quando a fila transbordar. 

  - **Drop head**: Remove a mensagem mais antiga para receber a nova;
  - **Reject publish**: O publicador não consegue mais enviar mensagem para fila;

## Dead Letter Queue

 Quando as mensagem, por algum motivo, não são processadas pelas consumers, elas são enviadas para uma fila que chamamos de Dead Letter Queue.
  
 Essas mensagem podem ser configuradas para cair em alguma exchange específica para esse tipo de mensagem, que serão entregues, por exemplo, a alguma aplicação para tratamentos de mensagens.

 ## Lazy Queue

 As mensagens são armazenas no disco. Quando os consumidores não dão conta de processar as mensagens do fila é necessário gravar as mensagens para não perder nenhuma informação. Porém essa gravação tem um custo, pois serão gravadas em disco, deixando um pouco mais lento todo o processo.

# Confiabilidade

Confiabilidade é o processo utilizado para garantir a entrega das mensagens, ou seja, garantir que as mensagens não serão perdidas no meio do caminho.

Sempre que um **consumer** recebe uma mensagem ele precisa avisar a fila que processou ou não processou a mensagem com sucesso.

Recursos para garantir a confiabilidade:

- **Consumer acknowledgement**: Quando o consumer processou com sucesso a mensagem;

  Possuem 3 tipos de acknowledgement:

  - **Ack**: Tudo ok e processado;
  - **Reject**: Quando deu alguma exception, algum problema. A mensagem volta para a fila.
  - **Nack**: Igual ao *reject*, porém podendo recusar mais de uma mensagem;

- **Publisher confirm**: Quando o producer quer ter certeza que a mensagem chegou no exchange;

  Publish envia mensagem com um ID para mensagem, assim quando o exchange receber ele vai retornar um **Ack** com o Id informado para o publish. 

  > O ID da mensagem é de responsabilidade do publisher, ele deve criar o ID e deve ser do tipo numérico.

- **Filas e mensagens duráveis / persistidas**: Mensagens são armazenadas em disco;


# Simulador RabbitMQ

Permite visualizar o fluxo das mensagens dentro do RabbitMQ.

Acesse o [Simulador Rabbit](http://tryrabbitmq.com/).



