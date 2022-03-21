class PedidoDao {
    constructor(bd) {
        this.bd = bd
    }

    pegaPedidos() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM PEDIDO;', (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                } else {
                    console.log(rows)
                    resolve({
                        "pedido": rows,
                        "count": rows.length,
                        "error": false
                    })
                }
            })
        })
    }

    pegaId(id) {
        const SELECT_BY_NUMERO_PEDIDO = `SELECT * FROM PEDIDO WHERE NUMERO_PEDIDO = ?`
        return new Promise((resolve, reject) => {
            this.bd.all(SELECT_BY_NUMERO_PEDIDO, id, (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "requisicao": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    inserirPedido(novoPedido) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO PEDIDO (QNT_PRATO, PRATO, QNT_PRATO2, PRATO2, QNT_PRATO3, PRATO3, NOME_CLIENTE, MOTOBOY, FILIAL, VALOR_TOTAL, FORMA_PAGAMENTO, OBSERVACAO, DATA_PEDIDO) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);`,
                [...Object.values(novoPedido)],
                (error) => {
                    if (error) {
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "requisicao": novoPedido,
                            "erro": false
                        })
                    }
                })
        })
    }

    async deletarPedido(id) {
        try {
            const pedido = await this.pegaId(id)
            if (pedido.requisicao.length) {
                const DELETE = `DELETE FROM PEDIDO WHERE NUMERO_PEDIDO = ?`
                return new Promise((resolve, reject) => {
                    this.bd.run(DELETE, id, (error) => {
                        if (error) {
                            reject({
                                "mensagem": error.message,
                                "erro": true
                            })
                        } else {
                            resolve({
                                "mensagem": `Pedido de número ${id} excluído com sucesso!`,
                                "erro": false
                            })
                        }
                    })
                })
            } else {
                throw new Error(`Pedido com número ${id} não existe`)
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    atualizarPedido(id, pedido) {
        return new Promise((resolve, reject) => {
            const UPDATE = `
            UPDATE PEDIDO
            SET QNT_PRATO = ?, PRATO = ?, QNT_PRATO2 = ?, PRATO2 = ?, QNT_PRATO3 = ?, PRATO3 = ?, NOME_CLIENTE = ?, MOTOBOY = ?, FILIAL = ?, VALOR_TOTAL = ?, FORMA_PAGAMENTO = ?, OBSERVACAO = ?, DATA_PEDIDO  = ?
            WHERE NUMERO_PEDIDO = ?`

            const array = [...Object.values(pedido), id]
            this.bd.run(UPDATE, array, (error) => {
                if (error) {
                    reject(error)
                } else {
                    resolve({
                        "mensagem": `Pedido de número ${id} atualizado com sucesso.`,
                        "pedido": pedido,
                        "erro": false
                    })
                }
            })
        })
    }
}

export default PedidoDao