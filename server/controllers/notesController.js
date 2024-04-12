const Note = require('../models/note')

// Get all notes
const getNotes = async (req, res) => {
  // find notes
  const notes = await Note.find();

  // respond with notes
  res.json({ notes: notes });
};

// get note by id
const getNote = async (req, res) => {
  // get id from URL
  const id = req.params.id;

  // find note using id
  const note = await Note.findById(id);

  // respond with note
  res.json({ note: note });
};

// post new note
const createNote = async (req, res) => {
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
};

// update existing note
const updateNote = async (req, res) => {
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
}

const deleteNote = async (req, res) => {
  // get id from URL
  const id = req.params.id;

  // delete record
  const note = await Note.findByIdAndDelete(id)

  // respond with deleted note
  res.json({note: note})
};

module.exports = {
  getNote: getNote,
  getNotes: getNotes,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
}
