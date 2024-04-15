const Note = require("../models/note");

// Get all notes
const getNotes = async (req, res) => {
  try {
    // find and return notes
    const notes = await Note.find({ user: req.user._id });
    res.json({ notes });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

// get note by id
const getNote = async (req, res) => {
  try {
    // get id from URL
    const id = req.params.id;

    // find note using id and user
    // const note = await Note.findById(id);
    const note = await Note.findOne({ _id: id, user: req.user._id });

    // respond with note
    // res.json({ note: note });
    res.json({ note });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

// post new note
const createNote = async (req, res) => {
  try {
    // get data from request body
    const { title, body } = req.body;

    // create note object
    const note = await Note.create({
      title,
      body,
      user: req.user._id,
    });

    // respond with new note
    res.json({ note });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

// update existing note
const updateNote = async (req, res) => {
  try {
    // get id from URL
    const id = req.params.id;

    // get data from request body
    const { title, body } = req.body;

    // find and update note using id
    // await Note.findByIdAndUpdate(id, {
    await Note.findOneAndUpdate(
      { _id: id, user: req.user._id },
      {
        title,
        body,
      }
    );

    // Get updated note
    const note = await Note.findById(id);

    // respond with note
    res.json({ note });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const deleteNote = async (req, res) => {
  try {
    // get id from URL
    const id = req.params.id;

    // delete record
    // const note = await Note.findByIdAndDelete(id)
    const note = await Note.findOneAndDelete({ _id: id, user: req.user._id });

    // respond with deleted note
    // res.json({ note: note });
    res.json({ note });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  getNote,
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
