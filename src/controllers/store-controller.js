const { Store } = require('./../models')
exports.get = async (req, res) => {
  const stores = await Store.findAll()
  res.send(stores)
}
