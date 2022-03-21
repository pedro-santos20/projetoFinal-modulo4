import moment from 'moment'

class Pedido {
    static verificarPagamento(formaPagamento) {
        if (formaPagamento == "dinheiro" || formaPagamento == "cartão") {
            return formaPagamento
        } else {
            throw new Error("Forma de pagamento inválida")
        }
    }

    static verificarValorMinimo(valorTotal) {
        if (valorTotal >= 20) {
            return valorTotal
        } else {
            throw new Error("Pedido mínimo é de R$20.00")
        }
    }

    static colocarData() {
        const dataPedido = moment().format('YYYY-MM-DD HH:mm:ss')
        return dataPedido
    }

    constructor(qnt_prato, prato, qnt_prato2, prato2, qnt_prato3, prato3, nomeCliente, motoboy, filial, valorTotal, formaPagamento, observacao) {
        this.QNT_PRATO = qnt_prato
        this.PRATO = prato
        this.QNT_PRATO2 = qnt_prato2
        this.PRATO2 = prato2
        this.QNT_PRATO3 = qnt_prato3
        this.PRATO3 = prato3
        this.NOME_CLIENTE = nomeCliente
        this.MOTOBOY = motoboy
        this.FILIAL = filial
        this.VALOR_TOTAL = Pedido.verificarValorMinimo(valorTotal)
        this.FORMA_PAGAMENTO = Pedido.verificarPagamento(formaPagamento)
        this.OBSERVACAO = observacao
        this.data_pedido = Pedido.colocarData()
    }
}

export default Pedido