// Import dependencies
import express from 'express';
import 'dotenv/config';

// Create an Express application
const app = express();

//await connectToDatabase();

// Define routes

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});