const { Product } = require('./../models')

exports.get = async (req, res) => {
  // #swagger.tags = ['Product']
  // #swagger.description = 'Endpoint para obter lista de produtos.'

  /* #swagger.parameters['limit'] = {
        description: 'Quantidade de registros a serem retornados',
        type: 'int'
    } */

  /* #swagger.parameters['offset'] = {
        description: 'Quantidade de itens a serem desconsiderados da busca',
        type: 'int'
    } */

  const products = await Product.findAll({
    limit: parseInt(req.query.limit) || 10,
    offset: parseInt(req.query.offset) || 0
  })

  /* #swagger.responses[200] = { 
      schema: [{ $ref: "#/definitions/Product" }],
    } */

  res.send(products)
}
