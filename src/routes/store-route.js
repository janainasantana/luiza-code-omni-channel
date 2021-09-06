const StoreController = require ("./../controllers/store-controller")

module.exports = app => {
    app.get("/stores", StoreController.get)
}