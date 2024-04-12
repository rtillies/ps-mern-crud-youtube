// load env variables
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

// import dependencies
const express = require('express')
const connectDB = require('./config/connectDB')

// create express app
const app = express();

// Connect to database
connectDB();

// Routing
app.get('/', (req, res) => {
  res.json({hello: "world"})
});

// Start server
app.listen(process.env.PORT || 3000);