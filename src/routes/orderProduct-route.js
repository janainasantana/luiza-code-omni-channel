const OrderProductController = require("./../controllers/orderProduct-controller")

module.exports = (app) => {
    app.post("/orders/:id/products", OrderProductController.post)
}