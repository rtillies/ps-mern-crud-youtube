// import dependencies
const express = require('express')

// create express app
const app = express();

// Routing
app.get('/', (req, res) => {
  res.json({hello: "world"})
});

// Start server
app.listen(3000);