import sqlite3 from 'sqlite3'
sqlite3.verbose()
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + './database.db'
const db = new sqlite3.Database('./database.db');

const PEDIDO_SCHEMA = `
CREATE TABLE IF NOT EXISTS PEDIDO (
    NUMERO_PEDIDO INTEGER PRIMARY KEY AUTOINCREMENT,
    QNT_PRATO INT,
    PRATO VARCHAR(255),
    QNT_PRATO2 INT,
    PRATO2 VARCHAR(255),
    QNT_PRATO3 INT,
    PRATO3 VARCHAR(255),
    NOME_CLIENTE VARCHAR(100) NOT NULL,
    MOTOBOY VARCHAR(100) NOT NULL,
    FILIAL VARCHAR(100) NOT NULL,
    VALOR_TOTAL DECIMAL NOT NULL,
    FORMA_PAGAMENTO VARCHAR(100) NOT NULL,
    OBSERVACAO TEXT,
    DATA_PEDIDO DATE NOT NULL
);`;

const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDO (NUMERO_PEDIDO, QNT_PRATO, PRATO, QNT_PRATO2, PRATO2, QNT_PRATO3, PRATO3, NOME_CLIENTE, MOTOBOY, FILIAL, VALOR_TOTAL, FORMA_PAGAMENTO, OBSERVACAO, DATA_PEDIDO) VALUES
(1, '2', 'Macarrão ao molho branco', '', '', '', '', 'Letícia', 'Lorenzo', 'Santo Amaro', '30', 'cartão', '', '2022-03-20 22:02:19'),
(2, '3', 'Feijoada', '', '', '', '', 'Stefanny', 'Lorenzo', 'Santo Amaro', '80', 'dinheiro', '', '2022-03-19 12:30:21'),
(3, '2', 'Lasanha', '', '', '', '', 'Bruno', 'Lorenzo', 'Santo Amaro', '35', 'cartão', '', '2022-03-21 13:15:24'),
(4, '1', 'Marmitex de churrasco', '', '', '', '', 'Naiara', 'Lucas', 'Piraporinha', '30', 'dinheiro', '', '2022-03-15 15:15:14'),
(5, '1', 'Frango à milanesa', '', '', '', '', 'Ingrid', 'Lucas', 'Socorro', '45', 'cartão', '', '2022-03-17 19:22:00'),
(6, '1', 'bolo de chocolate', '1', 'Sorvete de creme', '', '', 'Gleyce', 'Iago', 'Barra da Tijuca', '87', 'cartão', '', '2022-03-22 18:16:23'),
(7, '1', 'marmita de macarrão com frango', '1', ' marmita simples com bife bem passado', '2', 'petit gateau', 'Eduardo', 'Iago', 'Barra da Tijuca', '76', 'dinheiro', 'recado no petit gateau pra minha namorada: "eu te amo meu amor, e pra sempre vou te amar"', '2022-03-21 13:35:06'),
(8, '1', 'macarrão ao molho vermelho', '1', 'coca-cola', '1', 'torta de limão', 'Carlos', 'Lucas', 'Piraporinha', '55', 'dinheiro', '', '2022-03-21 11:26:18'),
(9, '1', 'strogonoff de frango', '1', 'coca-cola', '', '', 'João', 'Lorenzo', 'Santo Amaro', '50', 'cartão', '', '2022-03-22 17:35:30'),
(10, '2', 'marmitas de churrasco', '1', 'marmita de macarrão com frango', '1', 'coca-cola 2L', 'Murilo', 'Iago', 'Barra da Tijuca', '95', 'cartão', '', '2022-03-21 20:02:05')`

function criarTabelaPedido() {
    db.run(PEDIDO_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de pedidos");
    });
}

function popularTabelaPedido(){
    db.run(ADD_PEDIDOS_DATA,(err) => {
        if (err) console.log("erro ao popular tabela de pedidos");
    });
}

db.serialize(() => {
    criarTabelaPedido();
    popularTabelaPedido();
});