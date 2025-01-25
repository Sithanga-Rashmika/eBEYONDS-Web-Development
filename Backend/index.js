import mysql from "mysql2";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();

// CORS
const corsOptions = {
  origin: ["http://localhost:5173/", "https://localhost:5173/"], 
};

app.use(cors(corsOptions));
app.use(bodyParser.json());


//define routes




const PORT = process.env.PORT || 5005;

// Start the server
app.listen(PORT, () => {
  console.log("\n**************************************************\n")
  console.log(`Server Running on port : ${PORT}`)
});

// Database Configuration
const dbConfig = {
  host: process.env.MYSQLHOST,
  database: process.env.MYSQLDATABASE,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  port: process.env.MYSQLPORT
}

// Create the connection pool
const db = mysql.createPool(dbConfig);

// Test the database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed: ', err.stack);
    return;
  }
  console.log('Connected to the database with connection ID: ', connection.threadId);
  connection.release();
});


export default db;