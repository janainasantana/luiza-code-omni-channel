const { Client } = require('../models')
const { cpf } = require('cpf-cnpj-validator')
const {EmailValidator} = require('email-validator')


exports.post = async (req, res) => {
  const data = req.body

  data.cpf = data.cpf.replace('.', '').replace('.', '').replace('-', '')

  try {
    const client = await Client.create({
      name: data.name,
      cpf: data.cpf,
      email: data.email
    })
    response(res, 201, client)
  } catch (error) {
    response(res, 400, `Cannot save client, error: ${error}`)
  }
}

response = (res, status, data) => {
  res.status(status).json(data)
}

cpfValidate = async (varCpf, res) => {
  if (!cpf.isValid(varCpf)) {
    response(res, 400, `CPF invalid`)
  }
  const client = await Client.findOne({ where: { cpf: varCpf } })
  if (client) {
    response(res, 400, `CPF already exists`)
  }
}
emailValidate = async (email, res) =>{
  if (!EmailValidator.validate(email)) {
     response(res, 400, `email invalid`)
  }
  const cliente = await Client.findOne({where: {email:email}})
  if (client) {
    response(res, 400, `email already exists`)
  }

}


