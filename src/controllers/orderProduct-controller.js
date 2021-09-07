const { OrdersProducts, Order, Product } = require("./../models")


exports.post = async (req, res) => {
    const productId = parseInt(req.body.productId)
    const orderId = parseInt(req.params.id)
    
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

