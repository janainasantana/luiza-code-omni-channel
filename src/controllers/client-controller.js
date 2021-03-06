const { Client } = require('../models')
const { cpf } = require('cpf-cnpj-validator')
const validator = require('email-validator')

exports.post = async (req, res) => {
  // #swagger.tags = ['Client']
  // #swagger.description = 'Endpoint para cadastrar um cliente.'

  /* #swagger.parameters[newClient'] = {
      in: 'body',
      description: 'objeto para cadastrar um cliente',
      required: true,
      type: 'object',
      schema: { $ref: "#/definitions/NewClient" }
  } */
  let data = req.body

  try {
    data.cpf = data.cpf.replace('.', '').replace('.', '').replace('-', '')

    if (!cpf.isValid(data.cpf))
      return response(res, 400, `CPF format is invalid`)

    if (!validator.validate(data.email))
      return response(res, 400, `Email format is invalid`)

    const dbClient = await Client.findOne({ where: { cpf: data.cpf } })
    if (dbClient) {
      /* #swagger.responses[409] = { 
        description: `email and CPF to be unique`
      } */
      return response(res, 409, `CPF to be unique`)
    }

    const dbClientEmail = await Client.findOne({ where: { email: data.email } })
    if (dbClientEmail) {
      return response(res, 409, `email to be unique`)
    }

    const client = await Client.create({
      name: data.name,
      cpf: data.cpf,
      email: data.email
    })

    if (client) {
      /* #swagger.responses[201] = { 
      schema: { $ref: "#/definitions/Client" },
      } */
      return response(res, 201, client)
    }
  } catch (error) {
    /* #swagger.responses[400] = { 
      description: `Cannot save client, error`
    } */
    return response(res, 400, `Cannot save client, error: ${error}`)
  }
}

response = (res, status, data) => {
  res.status(status).json(data)
}
