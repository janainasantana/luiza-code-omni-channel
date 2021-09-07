const { OrdersProducts, Order, Product } = require('./../models')

//CREATE ORDER
exports.post = async (req, res) => {
  const data = req.body

  try {
    const order = await Order.create({
      id_status: 1,
      id_client: data.id_client,
      id_store: data.id_store
    })
    return response(res, 201, order)
  } catch (error) {
    return response(res, 400, `Cannot save order, error: ${error}`)
  }
}

exports.patchRetrieve = async (req, res) => {
  const orderId = req.params.id
  const order = await Order.findByPk(orderId)
  if (!order) {
    return response(res, 404, 'Order not found.')
  } else {
    if (order.id_status === 2) {
      order.id_status = 3
      await order.save()
      return response(res, 200, order)
    } else {
      return response(res, 422, 'Order status cannot be updated.')
    }
  }
}

exports.patchFinish = async (req, res) => {
  const orderId = req.params.id
  const order = await Order.findByPk(orderId)
  if (!order) {
    return response(res, 404, 'Order not found.')
  } else {
    if (order.id_status === 1) {
      order.id_status = 2
      await order.save()
      return response(res, 200, order)
    } else {
      return response(res, 422, 'Order status cannot be updated.')
    }
  }
}

exports.getOrdersByClient = async (req, res) => {
  const clientId = parseInt(req.params.clientId)

  try {
    const orders = await Order.findAll(
      { where: { id_client: clientId } },
      {
        limit: parseInt(req.query.limit) || 10,
        offset: parseInt(req.query.offset) || 0
      }
    )
    return response(res, 200, orders)
  } catch (error) {
    return response(res, 404, `We can't find client orders, error: ${error}`)
  }
}

exports.addProduct = async (req, res) => {
  const productId = parseInt(req.body.productId)
  const orderId = parseInt(req.params.id)

  try {
    const order = await Order.findByPk(orderId)
    if (!order) {
      return response(res, 404, 'Cannot add product. Order not found.')
    }
    if (order.id_status !== 1) {
      return response(
        res,
        422,
        'Cannot add product when Order status is not created.'
      )
    }
    const product = await Product.findByPk(productId)
    if (!product) {
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
      return response(res, 422, 'Product already exists in this order.')
    }

    return response(res, 201, orderProduct)
  } catch (error) {
    return response(res, 400, `Cannot save product, error: ${error}`)
  }
}

response = (res, status, data) => {
  res.status(status).json(data)
}
