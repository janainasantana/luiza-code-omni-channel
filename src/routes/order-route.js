const OrderController = require("./../controllers/order-controller")

module.exports = (app) => {
    app.post("/orders", OrderController.post)
    app.patch("/orders/:id/finish", OrderController.patchFinish)
    app.patch("/orders/:id/retrieve", OrderController.patchRetrieve)
}

