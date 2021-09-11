const { OrdersProducts, Order, Product } = require('./../models')

exports.post = async (req, res) => {
  // #swagger.tags = ['Order']
  // #swagger.description = 'Endpoint para criar um pedido.'

  /* #swagger.parameters['NewOrder'] = {
      in: 'body',
      description: 'objeto para a criação do pedido',
      required:true,
      type: 'object',
      schema: { $ref: "#/definitions/NewOrder" }
  } */

  const data = req.body

  try {
    const order = await Order.create({
      id_status: 1,
      id_client: data.id_client,
      id_store: data.id_store
    })
    /* #swagger.responses[201] = { 
      schema: { $ref: "#/definitions/Order" },
    } */
    return response(res, 201, order)
  } catch (error) {
    /* #swagger.responses[400] = { 
      description: `Cannot save order, error`,
    } */
    return response(res, 400, `Cannot save order, error: ${error}`)
  }
}

exports.patchRetrieve = async (req, res) => {
  // #swagger.tags = ['Order']
  // #swagger.description = 'Endpoint atualizar status do pedido para Retirado.'
  // #swagger.parameters['orderId'] = { description: 'ID do pedido.' }

  /* #swagger.parameters['orderId'] = {
    description: 'Id do pedido',
    type: 'number',
  } */

  const orderId = req.params.orderId
  const order = await Order.findByPk(orderId)
  if (!order) {
    /* #swagger.responses[404] = { 
      description: `Order not found`,
    } */
    return response(res, 404, 'Order not found.')
  } else {
    if (order.id_status === 2) {
      order.id_status = 3
      await order.save()
      /* #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Order" },
      } */
      return response(res, 200, order)
    } else {
      /* #swagger.responses[422] = { 
        description: `Order status cannot be updated.`,
      } */
      return response(res, 422, 'Order status cannot be updated.')
    }
  }
}

exports.patchFinish = async (req, res) => {
  // #swagger.tags = ['Order']
  // #swagger.description = 'Endpoint atualizar status do pedido para Realizado.'
  // #swagger.parameters['orderId'] = { description: 'ID do pedido.' }

  /* #swagger.parameters['orderId'] = {
    description: 'Id do pedido',
    type: 'number',
  } */
  
  const orderId = req.params.orderId
  const order = await Order.findByPk(orderId)
  const orderHasProdut = await OrdersProducts.findOne({
    where: { id_order: orderId }
  })

  if (!order) {
    /* #swagger.responses[404] = { 
      description: `Order not found`,
    } */
    return response(res, 404, 'Order not found.')
  } else {
    if (order.id_status === 1 && orderHasProdut) {
      order.id_status = 2
      await order.save()
      /* #swagger.responses[200] = {
        schema: { $ref: "#/definitions/Order" },
      } */
      return response(res, 200, order)
    } else {
      /* #swagger.responses[422] = {
        description: `Order status cannot be updated.`,
      } */
      return response(res, 422, 'Order status cannot be updated.')
    }
  }
}

exports.getOrdersByClient = async (req, res) => {
  // #swagger.tags = ['Order']
  // #swagger.description = 'Endpoint que busca os pedidos do cliente.'

  /* #swagger.parameters['clientId'] = {
    description: 'Id do cliente',
    type: 'number',
  } */

  /* #swagger.parameters['limit'] = {
    description: 'Quantidade de pedidos a serem retornados por pagina',
    type: 'string',
  } */

  /* #swagger.parameters['offset'] = {
    description: 'Número da página a ser retornada',
    type: 'string',
  } */

  const clientId = parseInt(req.params.clientId)

  try {
    const orders = await Order.findAll(
      { where: { id_client: clientId } },
      {
        limit: parseInt(req.query.limit) || 10,
        offset: parseInt(req.query.offset) || 0
      }
    )
    /* #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Order" },
    } */
    return response(res, 200, orders)
  } catch (error) {
    /* #swagger.responses[404] = {
      description: `We can't find client orders, error.`,
    } */
    return response(res, 404, `We can't find client orders, error: ${error}`)
  }
}

exports.addProduct = async (req, res) => {
  // #swagger.tags = ['Order']
  // #swagger.description = 'Endpoint que adiciona produto no pedido.'

  /* #swagger.parameters['productId'] = {
    in: 'body',
    description: 'Id do produto para adicionar no pedido',
    required: true,
    type: 'object',
    schema: { $ref: "#/definitions/NewProduct" },
  } */

  const productId = parseInt(req.body.productId)
  const orderId = parseInt(req.params.orderId)

  try {
    const order = await Order.findByPk(orderId)
    if (!order) {
      return response(res, 404, 'Cannot add product. Order not found.')
    }
    if (order.id_status !== 1) {
      return response(res, 422, 'Cannot add product when Order status is not created.')
    }
    const product = await Product.findByPk(productId)
    if (!product) {
      /* #swagger.responses[404] = {
        description: `Product or order not found.`,
      } */
      return response(res, 404, 'Product not found.')
    }
    let orderProduct = await OrdersProducts.findOne({
      where: { id_order: orderId, id_product: productId }
    })

    if (!orderProduct) {
      orderProduct = await OrdersProducts.create({
        id_order: orderId,
        id_product: productId
      })
    } else {
      /* #swagger.responses[422] = {
        description: `Product already exists in this order or order status is not created.`,
      } */
      return response(res, 422, 'Product already exists in this order.')
    }
    /* #swagger.responses[201] = { 
      schema: { $ref: "#/definitions/OrderProduct" },
    } */
    return response(res, 201, orderProduct)
  } catch (error) {
    /* #swagger.responses[400] = {
      description: `Cannot save product, error.`,
    } */
    return response(res, 400, `Cannot save product, error: ${error}`)
  }
}

exports.deleteProduct = async (req, res) => {
  // #swagger.tags = ['Order']
  // #swagger.description = 'Endpoint que remove produto do pedido.'

  

  const orderId = parseInt(req.params.orderId)
  const productId = parseInt(req.params.productId)

  const order = await Order.findByPk(orderId)
  if (!order) {
    return response(res, 404, 'Order not found.')
  } else {
    if (order.id_status === 1) {
      const rows = await OrdersProducts.destroy({
        where: { id_order: orderId, id_product: productId }
      })
      if (rows > 0) {
        /* #swagger.responses[200] = {
          description: `Product removed.`,
        } */
        return response(res, 200, 'Product removed')
      }
      /* #swagger.responses[404] = {
        description: `Product or Order not found.`,
      } */
      return response(res, 404, 'Product not found.')
    } else {
      /* #swagger.responses[422] = {
        description: `Cannot remove product when Order status is not created.`,
      } */
      return response(res, 422, 'Cannot remove product when Order status is not created.')
    }
  }
}

response = (res, status, data) => {
  res.status(status).json(data)
}
