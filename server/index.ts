// Import dependencies
import dotenv from 'dotenv';
import { connection, syncDatabase } from './config/db';
import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'

const clientPath = path.resolve(__dirname, '../client/dist')
export const app = express();

dotenv.config();

app.use(express.json())
app.use(express.static(clientPath))
const corsOption = {
  origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

//route definition
app.use(routes)


//database connection
connection();
syncDatabase()

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});