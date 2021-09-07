const { Order } = require("../models")

exports.get = async (req, res) => {
    const clientId = req.params.clientId
    
    try{
        const orders = await Order.findAll({ where: {id_client: clientId}}, 
            {
            limit: parseInt(req.query.limit) || 10, 
            offset: parseInt(req.query.offset) || 0
            }
        )
        return response(res, 200, orders)
    }
    catch(error){
        return response(res, 404, `We can't find client orders, error: ${error}`)
    }  
}

response = (res, status, data) => {
    res.status(status).json(data)
}