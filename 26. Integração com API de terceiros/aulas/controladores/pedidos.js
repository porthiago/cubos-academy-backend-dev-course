const instanciaAxios = require('../servicos/pagarme')

const criarPedido = async (req, res) => {
  const { body } = req

  try {

    const pedido = await instanciaAxios.post('/transactions', body)

    return res.json(pedido.data)
  } catch (error) {
    const { data: {errors}, status } = error.response
    return res.status(400).json({ 
        erro: `${errors[0].message}.paramater_name - ${errors[0].message}`
     })
  }
}

const consultarPedido = async (req, res) => {
  const { params: { id } } = req

  try {
    const pedido = await instanciaAxios.get(`/transactions/${id}`)

    return res.json(pedido.data)
  } catch (error) {
    const { data: {errors}, status } = error.response
    return res.status(400).json({ 
        erro: `${errors[0].message}.paramater_name - ${errors[0].message}`
     })
  }
}

module.exports = {
  criarPedido,
  consultarPedido
}
