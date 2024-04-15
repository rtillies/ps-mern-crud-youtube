const Note = require('../models/note')

// Get all notes
const getNotes = async (req, res) => {
  // find notes
  const notes = await Note.find({user: req.user._id});

  // respond with notes
  // res.json({ notes: notes });
  res.json({ notes });
};

// get note by id
const getNote = async (req, res) => {
  // get id from URL
  const id = req.params.id;

  // find note using id and user
  // const note = await Note.findById(id);
  const note = await Note.findOne({_id: id, user: req.user._id});

  // respond with note
  // res.json({ note: note });
  res.json({ note });
};

// post new note
const createNote = async (req, res) => {
  // get data from request body
  // const title = req.body.title;
  // const body = req.body.body;
  const {title, body} = req.body

  // create note object
  const note = await Note.create({
    // title: title,
    // body: body,
    title, body,
    user: req.user._id
  });

  // respond with new note
  // res.json({ note: note });
  res.json({ note });
};

// update existing note
const updateNote = async (req, res) => {
  // get id from URL
  const id = req.params.id;

  // get data from request body
  // const title = req.body.title;
  // const body = req.body.body;
  const {title, body} = req.body
  
  // find and update note using id
  // await Note.findByIdAndUpdate(id, {
  await Note.findOneAndUpdate({_id: id, user: req.user._id}, {
    title, body,
  });

  // Get updated note
  const note = await Note.findById(id)

  // respond with note
  // res.json({ note: note });
  res.json({ note });
}

const deleteNote = async (req, res) => {
  // get id from URL
  const id = req.params.id;

  // delete record
  // const note = await Note.findByIdAndDelete(id)
  const note = await Note.findOneAndDelete({_id: id, user: req.user._id})

  // respond with deleted note
  // res.json({ note: note });
  res.json({ note });
};

module.exports = {
  getNote,
  getNotes,
  createNote,
  updateNote,
  deleteNote,
}
// module.exports = {
//   getNote: getNote,
//   getNotes: getNotes,
//   createNote: createNote,
//   updateNote: updateNote,
//   deleteNote: deleteNote,
// }
