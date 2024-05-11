import express, { Request, Response } from 'express'
import customerRoutes from './routes/customers'
import path from 'path'

const clientPath = path.resolve(__dirname, '../client/dist')
export const app = express();
const routeHandler = express.Router()
routeHandler.use('/customer', customerRoutes)
app.use('/', routeHandler)