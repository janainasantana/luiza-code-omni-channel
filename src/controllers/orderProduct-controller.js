const { OrderProduct } = require("./../models")

exports.post = async (req, res) => {
    const data = req.body.products

    try {
        const orderProduct = await OrderProduct.create({
            id_order: data.id_order,
            id_product: data.id_product,
        })
        return response(res, 201, OrderProduct)
    } catch (error) {
        return response(res, 400, `Cannot save product, error: ${error}`)
    }
}

response = (res, status, data) => {
    res.status(status).json(data)
}

