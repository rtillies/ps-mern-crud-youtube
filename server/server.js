// load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const connectDB = require("./config/connectDB");
const notesController = require("./controllers/notesController")
// const Note = require("./models/note");

// create and configure express app
const app = express();
app.use(express.json());

// Connect to database
connectDB();

// Routing

// Base route
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/notes", notesController.getNotes);
app.get("/notes/:id", notesController.getNote);
app.get("/notes/", notesController.createNote);
app.get("/notes/:id", notesController.updateNote);
app.get("/notes/:id", notesController.deleteNote);

// Start server
app.listen(process.env.PORT || 3000);
