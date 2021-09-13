# 🗺 Mapeamento das rotas

Exemplo e demostração das rotas e parâmetros e body das requisições.</br>
Para caso o usuário queira realizar a verificação do REST no Postman, Insomnia ou outros softwares.

## 📑 Índice
* [Listagem de lojas](#lojas)
* [Listagem de produtos](#produtos)
* [Cadastro de clientes](#clientes)
* [Criação de pedido](#pedido)
* [Adicionando produto ao pedido](#produtoPedido)
* [Excluindo um produto do pedido](#excluirProdutoPedido)
* [Modificando o status do pedido para "Finalizado"](#statusFinalizado)
* [Modificando o status do pedido para "Retirado"](#statusRetirado)
* [Listagem de todos os pedidos realizador por um cliente](#pedidosCliente)

---

<div id='lojas'/>

## 🏪 Listagem de lojas
Listagem de todas as lojas cadastradas na base de dados. 
Nesse projeto nós utilizamos <i>seeders</i> para o pré-cadastramento de algumas lojas no banco de dados.

Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:3000/stores
```

### 📜 Parâmetros (body):
Parâmetros opcionais.
```json
{
  "limit": 10,
  "offset": 0
}
```
`limit`: quantidade de registros a serem retornados.</br>
`offset`: quantidade de itens a serem desconsiderados na busca.

### 📤 Resposta:
Exemplo:
```json
[
  {
    "id": 1,
    "name": "Magazine Luiza - loja 01",
    "address": "R. Sete de Setembro, 100 - Centro, Caçapava - SP",
    "createdAt": "2021-09-05T19:16:54.000Z",
    "updatedAt": "2021-09-05T19:16:54.000Z"
  },
  {
    "id": 2,
    "name": "Magazine Luiza - loja 02",
    "address": "Rua Doutor Lúcio Malta, 478 ala A - Centro, Jacareí - SP",
    "createdAt": "2021-09-05T19:16:54.000Z",
    "updatedAt": "2021-09-05T19:16:54.000Z"
  },
]
```

---

<div id='produtos'/>

## 📦 Listagem de produtos
Listagem de todas os produtos cadastradas na base de dados. 
Nesse projeto nós utilizamos <i>seeders</i> para o pré-cadastramento de alguns produtos no banco de dados.

Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:3000/products
```

### 📜 Parâmetros (body):
Parâmetros opcionais.
```json
{
  "limit": 10, 
  "offset": 0 
}
```
`limit`: quantidade de registros a serem retornados.</br>
`offset`: quantidade de itens a serem desconsiderados na busca.

### 📤 Resposta:
Exemplo:
```json
[
  {
    "id": 1,
    "name": "Sabão em Pó Omo Lavagem Perfeita",
    "price": 16.9,
    "createdAt": "2021-09-12T21:06:36.000Z",
    "updatedAt": "2021-09-12T21:06:36.000Z"
  },
  {
    "id": 2,
    "name": "Leite Condensado Semidesnatado",
    "price": 4.99,
    "createdAt": "2021-09-12T21:06:36.000Z",
    "updatedAt": "2021-09-12T21:06:36.000Z"
  },
]
```

---

<div id='clientes'/>

## 👨‍👩‍👧‍👦 Cadastro de clientes
Cadastrar clientes na base de dados.</br>
Essa rota possui as seguintes validações:
- O CPF e o e-mail tem que ser válidos
- O CPF e o e-mail tem que ser únicos
- Todos os campos devem ser preenchidos

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:3000/client
```

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.

```json
{
  "name": "Maria",
  "cpf": "000.000.000-00",
  "email": "maria@email.com"
}
```

### 📤 Resposta:
Exemplo:
```json
{
  "createdAt": "2021-09-13T13:32:22.044Z",
  "updatedAt": "2021-09-13T13:32:22.044Z",
  "id": 1,
  "name": "Maria",
  "cpf": "00000000000",
  "email": "maria@email.com"
}
```

---

<div id='pedido'/>

## 🧾 Criação de pedido
Criar um pedido de um determinado cliente.</br>

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:3000/orders
```

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.

```json
{
  "id_client": 1,
  "id_store": 1
}
```

### 📤 Resposta:
Exemplo:
```json
{
  "createdAt": "2021-09-09T01:13:11.140Z",
  "updatedAt": "2021-09-09T01:13:11.140Z",
  "id": 1,
  "id_status": 1,
  "id_client": 1,
  "id_store": 1
}
```

---

<div id='produtoPedido'/>

## 🛒 Adicionando produto ao pedido
Adiconar um produto em um pedido de um determinado cliente.</br>
Essa rota possui a seguinte validação:
- O pedido deve estar com o status "Criado" (1)
- O pedido deve conter somente um item de cada produto

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:3000/orders/:orderId/products
```
`:orderId`: deve ser substituido pelo id de um pedido.

### 📜 Parâmetros (body):
*Parâmetro obrigatório.

```json
{
  "productId": 1
}
```

### 📤 Resposta:
Exemplo:
```json
{
  "id": 1,
  "id_order": 1,
  "id_product": 1,
  "createdAt": "2021-09-09T01:13:11.140Z",
  "updatedAt": "2021-09-09T01:13:11.140Z"
}
```

---

<div id='excluirProdutoPedido'/>

## 🗑 Excluindo um produto do pedido
Excluir um produto de um pedido de um determinado cliente.</br>
Essa rota possui a seguinte validação:
- O pedido deve estar com o status "Criado" (1)

Método: `DELETE`

### 📥 Requisição (rota):
```
http://localhost:3000/orders/:orderId/products/:productId
```
`:orderId`: deve ser substituido pelo id de um pedido.
`:productId`: deve ser substituido pelo id do produto que está no pedido.

### 📤 Resposta:
Exemplo:
```
"Product removed."
```

---

<div id='statusFinalizado'/>

## 📦 Modificando o status do pedido para "Finalizado".
Finalizar a compra depois de ter criado e adicionado produtos no pedido.</br>
Essa rotas possui as seguintes validações:
- O status anterior tem que ser o de "Criado" (1) e não o de "Retirado" (3)
- Tem que ter pelo menos 1 produto no pedido

Método: `PATCH`
Patch - utilizado para atualizar somente algumas informações de um objeto

### 📥 Requisição (rota):
```
http://localhost:3000/orders/:orderId/finish
```
`:orderId`: deve ser substituido pelo id de um pedido.

### 📤 Resposta:
Exemplo:
```json
{
  "createdAt": "2021-09-09T01:13:11.140Z",
  "updatedAt": "2021-09-09T01:13:11.140Z",
  "id": 1,
  "id_status": 2,
  "id_client": 1,
  "id_store": 1
}
```

---

<div id='statusRetirado'/>

## 🚚 Modificando o status do pedido para "Retirado"
Mudar o status para "Retirado" depois de o cliente ter ido até a loja e retirado o seu pedido.</br>
Essa rotas possui as seguintes validações:
- O status anterior tem que ser o de "Finalizado" (2) e não o de "Criado" (1)

Método: `PATCH`
Patch - utilizado para atualizar somente algumas informações de um objeto

### 📥 Requisição (rota):
```
http://localhost:3000/orders/:orderId/retrieve
```
`:orderId`: deve ser substituido pelo id de um pedido.

### 📤 Resposta:
Exemplo:
```json
{
  "createdAt": "2021-09-09T01:13:11.140Z",
  "updatedAt": "2021-09-09T01:13:11.140Z",
  "id": 1,
  "id_status": 3,
  "id_client": 1,
  "id_store": 1
}
```

---

<div id='pedidosCliente'/>

## 📮 Listagem de todos os pedidos realizador por um cliente
Fazer a listagem de todos os pedidos realizado por um cliente, independente do status do pedido.

Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:3000/orders/client/:clientId
```
`:clientId`: deve ser substituido pelo id de um cliente.

### 📜 Parâmetros (body):
Parâmetros opcionais.
```json
{
  "limit": 10, 
  "offset": 0 
}
```
`limit`: quantidade de registros a serem retornados.</br>
`offset`: quantidade de itens a serem desconsiderados na busca.

### 📤 Resposta:
Exemplo:
```json
[{
  "createdAt": "2021-09-09T01:13:11.140Z",
  "updatedAt": "2021-09-09T01:13:11.140Z",
  "id": 1,
  "id_status": 3,
  "id_client": 1,
  "id_store": 1
},
{
  "createdAt": "2021-08-11T01:13:11.140Z",
  "updatedAt": "2021-08-11T01:13:11.140Z",
  "id": 1,
  "id_status": 3,
  "id_client": 1,
  "id_store": 2
}
]
```
