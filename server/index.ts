// Import dependencies
import dotenv from 'dotenv';
import { Connect, sync } from './config/mysql';
import express, { Request, Response } from 'express'
import customerRoutes from './routes/customers'
import path from 'path'

const clientPath = path.resolve(__dirname, '../client/dist')
export const app = express();

dotenv.config();

app.use(express.json())
app.use(express.static(clientPath))

//route definition
const routeHandler = express.Router()
app.use('/', routeHandler)
routeHandler.use('/customer', customerRoutes)

//database connection
Connect()
sync();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});