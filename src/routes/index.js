const ProductRoute = require ("./product-route")
const ClientRoute = require ("./client-route")
const StoreRoute = require ("./store-route")
const RetrieveOrderRoute = require ("./retrieve-order-route")
const FinishOrderRoute = require("./finish-order-route")
const OrderRoute = require("./order-route")

module.exports = app => {
    ProductRoute(app),
    ClientRoute(app),
    StoreRoute(app),
    RetrieveOrderRoute(app),
    FinishOrderRoute(app),
    OrderRoute(app)
}
