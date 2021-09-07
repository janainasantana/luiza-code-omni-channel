const { Product } = require("./../models")

exports.get = async (req, res) => {
    const products = await Product.findAll(
        {
            limit: parseInt(req.query.limit) || 10, 
            offset: parseInt(req.query.offset) || 0
        }
    )
    res.send(products)
}