const RetrieveOrderController = require ("../controllers/retrieve-order-controller")

module.exports = app => {
    app.patch("/orders/:id/retrieve", RetrieveOrderController.patch)
}