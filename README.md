## Descrição:

Projeto Final do módulo 4 do curso de Web Dev Full Stack para a [Resilia Educação](https://www.resilia.com.br/).
Nessa aplicação, foram usadas as ferramentas NodeJs / Nodemon, Express e SQLite para criar uma ferramenta que gera e administra pedidos do restaurante, além de possuir sistema de delivery.


## Ferramentas utilizadas:

<p> 
- Visual Studio Code
- Insomnia ou equivalente
</p>

## Dependências:

![badge](https://img.shields.io/badge/"cors"-"%5E2.8.5"-red)
![badge](https://img.shields.io/badge/"moment"-"%5E2.29.1"-red)
![badge](https://img.shields.io/badge/"nodemon"-"%5E2.0.15"-red)
![badge](https://img.shields.io/badge/"sqlite3"-"%5E5.0.2"-red)

## Passo a passo:

- Clone o repositório no seu computador:

    HTTPS: git clone https://github.com/pedro-santos20/projetoFinal-modulo4.git

    SSH: git clone git@github.com:pedro-santos20/projetoFinal-modulo4.git

- Instale o [NodeJS](https://nodejs.org/en/) na sua máquina. 

- Acesse a pasta criada através do PowerShell / Terminal:

    cd projetoFinal-modulo4

- Instale as dependências necessárias:

    npm install

- Inicie o servidor:

    npm run dev

## Rotas:

<p>
Atualmente, há somente a rota /pedidos

Com essa rota, é capaz de rodar todas as operações CRUD:

|Método|Rota|Descrição|
**GET** | /pedido | Mostra todos os pedidos
**GET** | /pedido/numero_pedido | Mostra o pedido do número escolhido
**PUT** | /pedido | Atualiza o pedido
**POST** | /pedido/numero_pedido | Cria um novo pedido
**DELETE** | /pedido/numero_pedido | Deleta o pedido
</p>

Projeto desenvolvido por [Pedro Santos](https://github.com/pedro-santos20)