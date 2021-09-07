const OrderProductController = require("./../controllers/orderProduct-controller")

module.exports = (app) => {
    app.post("/orderProduct", OrderProductController.post)
}