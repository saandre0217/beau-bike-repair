// Import dependencies
import express from 'express';
import dotenv from 'dotenv';
import { Connect, sync } from './config/mysql';

// Create an Express application
const app = express();

dotenv.config();

Connect()
 sync();

// Define routes

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});