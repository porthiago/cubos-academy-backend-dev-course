const axios = require('axios')
const fs = require('fs/promises')

const consultarDadosEmpresa = async (req, res) => {
  const dominioEmpresa = req.params.dominioEmpresa

  const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params: {
      api_key: '1dfd46900b8048b18d92c3dcdbcac626',
      domain: `${dominioEmpresa}`
    }
  })

  let dadosEmpresa

  try {
    dadosEmpresa = await instanciaAxios.get()

    if (!dadosEmpresa.data) {
      return res.status(400).json({
        mensagem: 'Empresa não encontrada'
      })
    }

    if (!dadosEmpresa.data.name) {
      return res.status(400).json({
        mensagem: 'Empresa não encontrada'
      })
    }

    const listaDasEmpresas = JSON.parse(
      await fs.readFile('./Data/empresas.json')
    )

    listaDasEmpresas.push(dadosEmpresa.data)
    

    fs.writeFile(
      './Data/empresas.json',
      JSON.stringify(listaDasEmpresas)
    )

    return res.status(200).json(dadosEmpresa.data)
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message
    })
  }
}

module.exports = { consultarDadosEmpresa }
