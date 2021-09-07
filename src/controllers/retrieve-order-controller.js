const { Order } = require("../models")

exports.patch = async (req, res) => {
    const orderId = req.params.id
    try {
        const responseCode = await Order.update(
            {
                id_status: 3,
                updatedAt: new Date()
            },
            { where: { id: orderId } })
        if (responseCode[0] === 1) {
            return response(res, 200, "Order status updated successfully.")
        } else {
            return response(res, 404, "Order not found.")
        }

    } catch (error) {
        return response(res, 500, "Unexpected error.")
    }
}

response = (res, status, data) => {
    res.status(status).json(data)
}
