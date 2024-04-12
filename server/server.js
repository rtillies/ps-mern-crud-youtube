// load env variables
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

// import dependencies
const express = require('express')

// create express app
const app = express();

// Routing
app.get('/', (req, res) => {
  res.json({hello: "world"})
});

// Start server
app.listen(process.env.PORT);