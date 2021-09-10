const OrderController = require('./../controllers/order-controller')

module.exports = app => {
  app.post('/orders', OrderController.post)
  app.patch('/orders/:orderId/finish', OrderController.patchFinish)
  app.patch('/orders/:orderId/retrieve', OrderController.patchRetrieve)
  app.get('/orders/client/:clientId', OrderController.getOrdersByClient)
  app.post('/orders/:orderId/products', OrderController.addProduct)
  app.delete('/orders/:orderId/products/:productId', OrderController.deleteProduct)
}
