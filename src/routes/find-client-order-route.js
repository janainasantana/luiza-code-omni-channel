const FindClientOrdersController = require("../controllers/find-client-orders-controller")

module.exports = (app) => {
    app.get("/client/:id", FindClientOrdersController.get)
}

