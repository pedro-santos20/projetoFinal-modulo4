import Pedido from '../model/pedido-model.js'
import PedidoDao from '../DAO/pedido-dao.js'

function pedido(app, bd) {
    const novoPedidoDao = new PedidoDao(bd)

    app.get('/pedido', async (req, res) => {

        try {
            const resposta = await novoPedidoDao.pegaPedidos()
            res.json(resposta)
        } catch (error) {
            res.json(error)
        }
    })

    app.get('/pedido/:id', async (req, res) => {
        const id = req.params.id
        try {
            const resposta = await novoPedidoDao.pegaId(id)
            res.json(resposta)
        } catch (error) {
            res.status(404).json(error)
        }

    })

    app.post('/pedido', async (req, res) => {

        try {
            const body = req.body
            const novoPedido = new Pedido(body.QNT_PRATO, body.PRATO, body.QNT_PRATO2, body.PRATO2, body.QNT_PRATO3, body.PRATO3, body.NOME_CLIENTE, body.MOTOBOY, body.FILIAL, body.VALOR_TOTAL, body.FORMA_PAGAMENTO, body.OBSERVACAO)

            const resposta = await novoPedidoDao.inserirPedido(novoPedido)

            res.json(resposta)
        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "erro": true
            })
        }
    })

    app.put('/pedido/:numero_pedido', async (req, res) => {
        const id = parseInt(req.params.numero_pedido)
        const body = req.body

        try {
            const respostaGet = await novoPedidoDao.pegaId(id)
            const pedidoAntigo = respostaGet.requisicao[0]
            if (pedidoAntigo) {
                const pedidoAtualizado = new Pedido(
                    body.QNT_PRATO || pedidoAntigo.QNT_PRATO,
                    body.PRATO || pedidoAntigo.PRATO,
                    body.QNT_PRATO2 || pedidoAntigo.QNT_PRATO2,
                    body.PRATO2 || pedidoAntigo.PRATO2,
                    body.QNT_PRATO3 || pedidoAntigo.QNT_PRATO3,
                    body.PRATO3 || pedidoAntigo.PRATO3,
                    body.NOME_CLIENTE || pedidoAntigo.NOME_CLIENTE,
                    body.MOTOBOY || pedidoAntigo.MOTOBOY,
                    body.FILIAL || pedidoAntigo.FILIAL,
                    body.VALOR_TOTAL || pedidoAntigo.VALOR_TOTAL,
                    body.FORMA_PAGAMENTO || pedidoAntigo.FORMA_PAGAMENTO,
                    body.OBSERVACAO || pedidoAntigo.OBSERVACAO
                )
                const resposta = await novoPedidoDao.atualizarPedido(id, pedidoAtualizado)
                res.json(resposta)
            } else {
                res.status(404).json({
                    "mensagem": `Pedido com número "${id}" não existe`,
                    "error": true
                })
            }
        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "error": true
            })
        }
    })

    app.delete('/pedido/:numero_pedido', async (req, res) => {
        const id = parseInt(req.params.numero_pedido)
        try {
            const resposta = await novoPedidoDao.deletarPedido(id)
            res.json(resposta)
        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "erro": true
            })
        }

    })

}

export default pedido