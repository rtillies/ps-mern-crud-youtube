// load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const connectDB = require("./config/connectDB");
const Note = require("./models/note");

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

// Get all notes
app.get("/notes", async (req, res) => {
  // find notes
  const notes = await Note.find();

  // respond with notes
  res.json({ notes: notes });
});

// get note by id
app.get("/notes/:id", async (req, res) => {
  // get id from URL
  const id = req.params.id;

  // find note using id
  const note = await Note.findById(id);

  // respond with note
  res.json({ note: note });
});

// post new note
app.post("/notes", async (req, res) => {
  // get data from request body
  const title = req.body.title;
  const body = req.body.body;

  // create note object
  const note = await Note.create({
    title: title,
    body: body,
  });
  // respond with new note
  res.json({ note: note });
});

// post new note
app.put("/notes/:id", async (req, res) => {
  // get id from URL
  const id = req.params.id;

  // get data from request body
  const title = req.body.title;
  const body = req.body.body;
  
  // find and update note using id
  await Note.findByIdAndUpdate(id, {
    title: title,
    body: body,
  });

  // Get updated note
  const note = await Note.findById(id)

  // respond with note
  res.json({ note: note });
})

// Start server
app.listen(process.env.PORT || 3000);
