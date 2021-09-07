const ProductRoute = require("./product-route")
const ClientRoute = require("./client-route")
const StoreRoute = require("./store-route")
const FinishOrderRoute = require("./finish-order-route")
const RetrieveOrderRoute = require ("./retrieve-order-route")
const OrderRoute = require("./order-route")
const FindClientOrderRoute = require("./find-client-order-route")

module.exports = app => {
    ProductRoute(app),
    ClientRoute(app),
    StoreRoute(app),
    FinishOrderRoute(app),
    RetrieveOrderRoute(app),
    OrderRoute(app),
    FindClientOrderRoute(app)
}
