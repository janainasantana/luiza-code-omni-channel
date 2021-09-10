const ProductController = require ("./../controllers/product-controller")

module.exports = app => {
    app.get("/products", ProductController.get)
}