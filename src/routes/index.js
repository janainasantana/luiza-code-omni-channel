const ProductRoute = require ("./product-route")
const ClientRoute = require ("./client-route")
const StoreRoute = require ("./store-route")
const orderProductRoute = require("./orderProduct-route")

module.exports = app => {
    ProductRoute(app),
    ClientRoute(app),
    StoreRoute(app),
    orderProductRoute(app)
    
    
}

