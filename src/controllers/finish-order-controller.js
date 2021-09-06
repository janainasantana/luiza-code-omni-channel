const { Order } = require("../models")

exports.patch = async (req, res) => {
    const orderId = req.params.id
    const order = await Order.findByPk(orderId)
    if (order === null) {
        return response(res, 404, "Order not found.")
    } else {
        order.id_status = 2
        order.updatedAt = new Date()
        await order.save()
    }
    return response(res, 200, order)
}

response = (res, status, data) => {
    res.status(status).json(data)
}
