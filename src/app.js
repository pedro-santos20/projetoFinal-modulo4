import express, { json } from 'express'
const app = express()
import cors from 'cors'

import pedido from './controller/pedido-controller.js'

import db from './infra/sqlite-db.js'

app.use(json())
app.use(cors())

pedido(app,db)

export default app