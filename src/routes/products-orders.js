const ProductsOrdersController = require("./../controllers/products-orders-controller")

module.exports = (app) => {
    app.post("/products-orders", ProductsOrdersController.post)
}

