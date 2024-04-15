// load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const connectDB = require("./config/connectDB");
const notesController = require("./controllers/notesController")
const usersController = require("./controllers/usersController")
const requireAuth = require("./middleware/requireAuth")
// const Note = require("./models/note");

// create and configure express app
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: true,
  credentials: true,
}));

// Connect to database
connectDB();

/** ROUTING **/
// Base route
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

// Notes routes
app.get("/notes", requireAuth, notesController.getNotes);
app.get("/notes/:id", requireAuth, notesController.getNote);
app.post("/notes/", requireAuth, notesController.createNote);
app.put("/notes/:id", requireAuth, notesController.updateNote);
app.delete("/notes/:id", requireAuth, notesController.deleteNote);

// User routes
app.post('/signup', usersController.signup)
app.post('/login', usersController.login)
app.get('/logout', usersController.logout)
app.get('/check-auth', requireAuth, usersController.checkAuth)

// Start server
app.listen(process.env.PORT || 3000);
