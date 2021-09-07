const OrderController = require("./../controllers/order-controller")

module.exports = (app) => {
    app.post("/orders", OrderController.post)
}

