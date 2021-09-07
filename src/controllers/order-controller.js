const { Order } = require("./../models")

//CREATE ORDER
exports.post = async (req, res) => {
    const data = req.body

    try {
        const order = await Order.create({
            id_status: 1,
            id_client: data.id_client,
            id_store: data.id_store
        })
        return response(res, 201, order)
    } catch (error) {
        return response(res, 400, `Cannot save order, error: ${error}`)
    }
}

//FIND CLIENT ORDER
exports.getOrdersByClient = async (req, res) => {
    const clientId = parseInt(req.params.clientId)
    
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