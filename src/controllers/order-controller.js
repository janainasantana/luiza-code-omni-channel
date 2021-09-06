const { Order } = require("./../models")

exports.post = async (req, res) => {
    const data = req.body

    try {
        const order = await Order.create({
            id_status: data.id_status,
            id_client: data.id_client,
            id_store: data.id_store
        })
        return response(res, 201, order)
    } catch (error) {
        return response(res, 400, `Cannot save order, error: ${error}`)
    }
}

response = (res, status, data) => {
    res.status(status).json(data)
}