const {Product} = require("./../models")
exports.get = async (req,res) => {
    const products = await Product.findAll()
    res.send(products)
    
}