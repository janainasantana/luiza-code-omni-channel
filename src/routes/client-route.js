const ClientController = require('./../controller/client-controller')

module.exports = app => {
  app.post('/client', ClientController.post)
}
