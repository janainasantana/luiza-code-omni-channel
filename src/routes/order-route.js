const OrderController = require("./../controllers/order-controller")

module.exports = (app) => {
    app.post("/orders", OrderController.post)
    app.getOrdersByClient("/orders/client/:id", FindClientOrdersController.get)
}
