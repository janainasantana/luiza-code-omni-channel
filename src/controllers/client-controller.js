const { Client } = require('../models')
const { Cpf } = require('cpf-cnpj-validator')
const { EmailValidator } = require('email-validator')

exports.post = async (req, res) => {
  const { name, email, cpf } = req.body

  cpf = cpf.replace('.', '').replace('.', '').replace('-', '')

  cpfValidate(cpf, res)
  emailValidate(email, res)

  const client = await Client.create({
    name: name,
    cpf: cpf,
    email: email
  })

  if (client) {
    return response(res, 201, client)
  }
  return response(res, 400, `Cannot save client, error: ${error}`)
}

response = (res, status, data) => {
  res.status(status).json(data)
}

cpfValidate = async (varCpf, res) => {
  if (!cpf.isValid(varCpf)) {
    return response(res, 400, `CPF invalid`)
  }
  const client = await Client.findOne({ where: { cpf: varCpf } })
  if (client) {
    return response(res, 400, `CPF already exists`)
  }
}

emailValidate = async (email, res) => {
  if (!EmailValidator.validate(email)) {
    return response(res, 400, `email invalid`)
  }
  const client = await Client.findOne({ where: { email: email } })
  if (client) {
    return response(res, 400, `email already exists`)
  }
}
