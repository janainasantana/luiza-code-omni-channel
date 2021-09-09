const swaggerAutogen = require('swagger-autogen')()
require('dotenv').config()

const doc = {
  info: {
    title: 'Luiza Code Omni Channel',
    description: 'Documentação de API para uso da aplicação de Omni Channel',
    version: '1.0.0'
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],

  definitions: {
    Client: {
      createdAt: '2021-09-09T01:22:53.918Z',
      updatedAt: '2021-09-09T01:22:53.918Z',
      id: 1,
      name: 'Maria',
      cpf: '000.000.000-00',
      email: 'exemplo@exemplo.com'
    },
    newClient: {
      name: 'Maria',
      cpf: '000.000.000-00',
      email: 'exemplo@exemplo.com'
    },
    Store: {
      id: 1,
      name: 'Magazine Luiza loja 01',
      address: 'Rua Benevides 13',
      createdAt: '2021-09-05T19:16:54.000Z',
      updatedAt: '2021-09-05T19:16:54.000Z'
    },
    Product: {
      id: 1,
      name: 'Shampoo',
      price: 11.98,
      createdAt: '2021-09-05T19:16:54.000Z',
      updatedAt: '2021-09-05T19:16:54.000Z'
    },
    Order: {
      createdAt: '2021-09-09T01:13:11.140Z',
      updatedAt: '2021-09-09T01:13:11.140Z',
      id: 1,
      id_status: 1,
      id_client: 1,
      id_store: 1
    },
    NewOrder: {
      $id_client: 1,
      $id_store: 1
    }
  }
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/*-route.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('../index.js')
})
