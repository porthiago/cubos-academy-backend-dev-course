const fs = require('fs')
const path = require('path')
const { format } = require('date-fns')

const caminhoDoArquivo = path.join('src', 'Data', 'BankDatabase.json')
const dadosBancarios = JSON.parse(fs.readFileSync(caminhoDoArquivo))

const { contas, depositos, saques, transferencias, banco } = dadosBancarios

module.exports = {
  listarContas(req, res) {
    try {
      const senhaBanco = req.query.senha_banco

      if (senhaBanco !== banco.senha) {
        return res
          .status(400)
          .json({ mensagem: 'A senha do banco informada é inválida!' })
      }

      return res.status(200).json({ Contas: contas, Total: contas.length })
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  },
  obterConta(req, res) {
    try {
      const { numeroConta } = req.params

      const conta = contas.find(conta => {
        return conta.numero === Number(numeroConta)
      })

      if (!conta) {
        return res.status(404).json({ Messagem: 'Conta não encontrada!' })
      }

      return res.status(200).json({ Conta: conta })
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  },

  criarConta(req, res) {
    try {
      const {
        nome,
        cpf,
        data_nascimento: dataNascimento,
        telefone,
        email,
        senha
      } = req.body

      if (!nome || !cpf || !dataNascimento || !telefone || !email || !senha) {
        return res
          .status(400)
          .json({ messagem: 'É necessário preencher todos os campos.' })
      }

      if (cpf.length !== 11) {
        return res.status(400).json({ messagem: 'CPF inválido' })
      }

      const cpfJaCadastrado = contas.some(conta => {
        return conta.usuario.cpf === cpf
      })

      if (cpfJaCadastrado) {
        return res.status(400).json({
          messagem: 'Já existe uma conta com o cpf informado!'
        })
      }

      const emailJaCadastrado = contas.some(conta => {
        return conta.usuario.email === email
      })

      if (emailJaCadastrado) {
        return res.status(400).json({
          messagem: 'Já existe uma conta com o e-mail informado!'
        })
      }

      const novaConta = {
        numero: Math.round(+new Date() * Math.random()),
        saldo: 0,
        usuario: { ...req.body }
      }

      contas.push(novaConta)
      fs.writeFileSync(caminhoDoArquivo, JSON.stringify(dadosBancarios))

      return res
        .status(201)
        .json({ Messagem: 'Conta criada com sucesso!', Conta: novaConta })
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  },

  atualizarConta(req, res) {
    try {
      const {
        nome,
        cpf,
        data_nascimento: dataNascimento,
        telefone,
        email,
        senha
      } = req.body

      const { numeroConta } = req.params

      if (!nome || !cpf || !dataNascimento || !telefone || !email || !senha) {
        return res
          .status(400)
          .json({ messagem: 'É necessário preencher todos os campos' })
      }

      const conta = contas.find(conta => {
        return conta.numero === Number(numeroConta)
      })

      if (!conta) {
        return res.status(404).json({ Messagem: 'Conta não encontrada!' })
      }

      if (cpf.length !== 11) {
        return res.status(400).json({ messagem: 'CPF inválido' })
      }

      if (conta.usuario.cpf !== cpf) {
        const cpfJaCadastrado = contas.some(conta => {
          return conta.usuario.cpf === cpf
        })

        if (cpfJaCadastrado) {
          return res.status(400).json({
            messagem: 'Já existe uma conta com o cpf informado!'
          })
        }
      }

      if (conta.usuario.email !== email) {
        const emailJaCadastrado = contas.some(conta => {
          return conta.usuario.email === email
        })

        if (emailJaCadastrado) {
          return res.status(400).json({
            messagem: 'Já existe uma conta com o e-mail informado!'
          })
        }
      }

      conta.usuario.nome = nome
      conta.usuario.cpf = cpf
      conta.usuario.data_nascimento = dataNascimento
      conta.usuario.telefone = telefone
      conta.usuario.email = email
      conta.usuario.senha = senha

      fs.writeFileSync(caminhoDoArquivo, JSON.stringify(dadosBancarios))

      return res.status(200).json({
        Messagem: 'Conta atualizada com sucesso!',
        Conta: conta
      })
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  },

  deletarConta(req, res) {
    try {
      const { numeroConta } = req.params

      const conta = contas.find(conta => {
        return conta.numero === Number(numeroConta)
      })

      if (!conta) {
        return res.status(404).json({ Messagem: 'Conta não encontrada!' })
      }

      if (conta.saldo !== 0) {
        return res.status(400).json({
          messagem: 'A conta só pode ser removida se o saldo for igual a zero!'
        })
      }

      const indexContaDeletar = contas.findIndex(elemento => {
        return elemento === conta
      })

      contas.splice(indexContaDeletar, 1)

      fs.writeFileSync(caminhoDoArquivo, JSON.stringify(dadosBancarios))

      return res.status(200).json({ Messagem: 'Conta removida com sucesso!' })
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  },

  depositarValor(req, res) {
    try {
      const { numero_conta: numeroConta, valor } = req.body

      if (!numeroConta || !valor) {
        return res
          .status(400)
          .json({ messagem: 'O número da conta e o valor são obrigatórios!' })
      }

      const conta = contas.find(conta => {
        return conta.numero === Number(numeroConta)
      })

      if (!conta) {
        return res
          .status(404)
          .json({ menssagem: 'A conta informada não foi encontrada!' })
      }

      if (valor <= 0) {
        return res.status(400).json({
          messagem: 'O valor a ser depositado deve ser maior do que 0'
        })
      }

      const registroDeposito = {
        data: format(new Date(), "yyyy'-'MM'-'dd HH':'mm':'ss"),
        numero_conta: numeroConta,
        valor
      }

      conta.saldo += valor
      depositos.push(registroDeposito)

      fs.writeFileSync(caminhoDoArquivo, JSON.stringify(dadosBancarios))

      return res.status(200).json(registroDeposito)
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  },

  sacarValor(req, res) {
    try {
      const { numero_conta: numeroConta, valor, senha } = req.body

      if (!numeroConta || !valor || !senha) {
        return res.status(400).json({
          messagem: 'O número da conta, o valor e a senha são obrigatórios!'
        })
      }

      const conta = contas.find(conta => {
        return conta.numero === Number(numeroConta)
      })

      if (!conta) {
        return res
          .status(404)
          .json({ messagem: 'A conta informada não foi encontrada!' })
      }

      if (conta.usuario.senha !== senha) {
        return res.status(400).json({
          messagem: 'A senha informada está incorreta.'
        })
      }

      if (valor > conta.saldo) {
        return res.status(400).json({
          messagem: 'Valor indisponível para saque'
        })
      }

      const registroSaque = {
        data: format(new Date(), "yyyy'-'MM'-'dd HH':'mm':'ss"),
        numero_conta: numeroConta,
        valor
      }

      conta.saldo -= valor
      saques.push(registroSaque)

      fs.writeFileSync(caminhoDoArquivo, JSON.stringify(dadosBancarios))

      return res.status(200).json(registroSaque)
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  },

  transferirValor(req, res) {
    try {
      const {
        numero_conta_origem: numeroContaOrigem,
        numero_conta_destino: numeroContaDestino,
        valor,
        senha
      } = req.body

      if (!numeroContaOrigem || !numeroContaDestino || !valor || !senha) {
        return res.status(400).json({
          messagem:
            'É necessário preencher todos os campos para efetuar a operação'
        })
      }

      const contaDeOrigem = contas.find(conta => {
        return conta.numero === Number(numeroContaOrigem)
      })

      if (!contaDeOrigem) {
        return res.status(400).json({
          messagem: 'A conta de origem informada não foi encontrada!'
        })
      }

      const contaDeDestino = contas.find(conta => {
        return conta.numero === Number(numeroContaDestino)
      })

      if (!contaDeDestino) {
        return res.status(400).json({
          messagem: 'A conta de destino informada não foi encontrada!'
        })
      }

      if (contaDeOrigem === contaDeDestino) {
        return res.status(400).json({
          messagem:
            'A conta de origem e a conta de destino não podem ser as mesmas!'
        })
      }

      if (contaDeOrigem.usuario.senha !== senha) {
        return res.status(400).json({
          messagem: 'A senha informada está incorreta.'
        })
      }

      if (valor > contaDeOrigem.saldo) {
        return res.status(400).json({
          messagem: 'Valor indisponível para transferência'
        })
      }

      const registroTransfencia = {
        data: format(new Date(), "yyyy'-'MM'-'dd HH':'mm':'ss"),
        numero_conta_origem: numeroContaOrigem,
        numero_conta_destino: numeroContaDestino,
        valor
      }

      transferencias.push(registroTransfencia)

      contaDeOrigem.saldo -= valor
      contaDeDestino.saldo += valor

      fs.writeFileSync(caminhoDoArquivo, JSON.stringify(dadosBancarios))

      return res.status(200).json(registroTransfencia)
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  },

  exibirSaldo(req, res) {
    try {
      const { numero_conta: numeroConta, senha } = req.query

      if (!numeroConta || !senha) {
        return res.status(400).json({
          messagem: 'O número da conta ou senha não foram informados'
        })
      }

      const conta = contas.find(conta => {
        return conta.numero === Number(numeroConta)
      })

      if (!conta) {
        return res.status(404).json({ messagem: 'Conta não encontada!' })
      }

      if (conta.usuario.senha !== senha) {
        return res.status(400).json({
          messagem: 'A senha informada está incorreta.'
        })
      }

      return res
        .status(200)
        .json({ Cliente: conta.usuario.nome, Saldo: conta.saldo })
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  },

  mostrarExtrato(req, res) {
    try {
      const { numero_conta: numeroConta, senha } = req.query

      if (!numeroConta || !senha) {
        return res.status(400).json({
          messagem: 'O número da conta ou senha não foram informados'
        })
      }

      const conta = contas.find(conta => {
        return conta.numero === Number(numeroConta)
      })

      if (!conta) {
        return res.status(404).json({ messagem: 'Conta não encontada!' })
      }

      if (conta.usuario.senha !== senha) {
        return res.status(400).json({
          messagem: 'A senha informada está incorreta.'
        })
      }

      const depositosRegistrados = depositos.filter(registro => {
        return registro.numero_conta === numeroConta
      })

      const saquesRegistrados = saques.filter(registro => {
        return registro.numero_conta === numeroConta
      })

      const transferenciasEnviadas = transferencias.filter(registro => {
        return registro.numero_conta_origem === numeroConta
      })

      const transferenciasRecebidas = transferencias.filter(registro => {
        return registro.numero_conta_destino === numeroConta
      })

      const extratoBancario = {
        depositos: depositosRegistrados,
        saques: saquesRegistrados,
        transferenciasEnviadas,
        transferenciasRecebidas
      }

      fs.writeFileSync(caminhoDoArquivo, JSON.stringify(dadosBancarios))

      return res
        .status(200)
        .json({ Cliente: conta.usuario.nome, Extrato: extratoBancario })
    } catch (erro) {
      return res.status(500).json({ Erro: erro.message })
    }
  }
}
