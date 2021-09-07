const { Store } = require("./../models")
exports.get = async (req, res) => {
    const stores = await Store.findAll(
        {
            limit: parseInt(req.query.limit) || 10, offset: parseInt(req.query.offset) || 0
        }
    )
    res.send(stores)

}