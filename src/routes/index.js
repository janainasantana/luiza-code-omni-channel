const ProductRoute = require("./product-route")
const ClientRoute = require("./client-route")
const StoreRoute = require("./store-route")
const FinishOrderRoute = require("./finish-order-route")

module.exports = app => {
    ProductRoute(app),
    ClientRoute(app),
    StoreRoute(app),
    FinishOrderRoute(app)
}