const FinishOrderController = require ("../controllers/finish-order-controller")

module.exports = app => {
    app.patch("/orders/:id/finish", FinishOrderController.patch)
}