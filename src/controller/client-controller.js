const { Client } = require('./../models')
const { cpf } = require('cpf-cnpj-validator')

exports.post = async (req, res) => {
  const data = req.body

  data.cpf = data.cpf.replace('.', '').replace('.', '').replace('-', '')

  if (!cpf.isValid(data.cpf)) {
    return response(res, 400, `CPF invalid`)
  }

  try {
    const client = await Client.create({
      name: data.name,
      cpf: data.cpf,
      email: data.email
    })
    return response(res, 201, client)
  } catch (error) {
    return response(res, 400, `Cannot save client, error: ${error}`)
  }
}

response = (res, status, data) => {
  res.status(status).json(data)
}
