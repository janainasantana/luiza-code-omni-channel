const OrderController = require('./../controllers/order-controller')

module.exports = app => {
  app.post('/orders', OrderController.post)
  app.patch('/orders/:id/finish', OrderController.patchFinish)
  app.patch('/orders/:id/retrieve', OrderController.patchRetrieve)
  app.get('/orders/client/:id', OrderController.getOrdersByClient)
  app.post('/orders/:id/products', OrderController.addProduct)
  app.delete(
    '/orders/:orderId/products/:productId',
    OrderController.deleteProduct
  )
}
