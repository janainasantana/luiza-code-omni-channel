const ClientController = require('./../controllers/client-controller')

module.exports = app => {
  app.post('/client', ClientController.post)
}
