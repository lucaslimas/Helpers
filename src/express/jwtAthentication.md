[Voltar](/src/node_express.md)

# Autenticação por JWT

JWT (Json Web Token) é um sistema de transferência de dados que pode ser enviado via POST ou em um cabeçalho HTTP (header) de maneira “segura”, essa informação é assinada digitalmente por um algoritmo HMAC, ou um par de chaves pública/privada usando RSA. Podemos ver na imagem a baixo um cenário onde será requisitado um token através do Verbo HTTP POST, que irá devolver um token validado para que nas próximas requisições que utilizem os Verbos HTTP possam utilizar.

Referência [imaster](https://imasters.com.br/desenvolvimento/json-web-token-conhecendo-o-jwt-na-teoria-e-na-pratica)

## Configurações Iniciais

Instalar o pacote de geração de token

```
yarn add jsonwebtoken
```

Criar o arquivo de configuração da geração do token

Criando o controller de Sessão **SessionController** na pasta **controller**

```js
```

Criar a rota para a sessão

```js
```
