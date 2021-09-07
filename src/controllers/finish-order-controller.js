const { Order } = require("../models")

exports.patch = async (req, res) => {
    const orderId = req.params.id
    const order = await Order.findByPk(orderId)
    if (order === null) {
        return response(res, 404, "Order not found.")
    } else {
        if (order.id_status === 1) {
            order.id_status = 2
            order.updatedAt = new Date()
            await order.save()
            return response(res, 200, order)
        } else {
            return response(res, 422, "Order status cannot be updated.")
        }
    }
}
response = (res, status, data) => {
    res.status(status).json(data)
}
