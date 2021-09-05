const { Order } = require("./../models")
exports.post = async (req, res) => {
    const order = req.body
    console.log(order);
    await Order.create(order).catch(error => {
        res.send(`Ocorreu um erro inesperado. erro: ${error.message}`)
    })
    res.send("Pedido criado com sucesso")
}