const ProductRoute = require ("./product-route")
const ClientRoute = require ("./client-route")
module.exports = app => {
    ProductRoute(app),
    ClientRoute(app)
    
}

