// load env variables
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

// import dependencies
const express = require('express')
const connectDB = require('./config/connectDB')
const Note = require('./models/note')

// create and configure express app
const app = express();
app.use(express.json())

// Connect to database
connectDB();

// Routing
app.get('/', (req, res) => {
  res.json({hello: "world"})
});

app.post('/notes', async (req, res) => {
  // get the sent data from request body
  const title = req.body.title;
  const body = req.body.body;
  
  // create note object
  const note = await Note.create({
    title: title,
    body: body,
  })
  // respond with new note
  res.json({note: note})
})

// Start server
app.listen(process.env.PORT || 3000);