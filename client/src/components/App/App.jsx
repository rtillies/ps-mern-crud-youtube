import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import notesStore from "../../stores/notesStore";

function App() {
  const URL = "http://localhost:3000/notes";
  const store = notesStore();

  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

  useEffect(() => {
    store.getNotes();
  }, []);

  const getNotes = async () => {
    // // get notes
    // const res = await axios.get(URL);

    // // set on state
    // console.log(res);
    // setNotes(res.data.notes);
  };

  const updateCreateFormField = (e) => {
    // const { name, value } = e.target;
    // setCreateForm({
    //   ...createForm,
    //   [name]: value,
    // });
    // console.log({ name, value });
  };

  const createNote = async (e) => {
    // e.preventDefault();

    // // create note
    // const res = await axios.post(URL, createForm);

    // // update state
    // setNotes([...notes, res.data.note]);

    // // clear form
    // setCreateForm({ title: "", body: "" });
    // console.log(res);
  };

  const deleteNote = async (_id) => {
    // delete note
    const url_id = `${URL}/${_id}`
    const res = await axios.delete(url_id);
    console.log(res);

    // update state
    const newNotes = [...notes].filter((note) => {
      return note._id !== _id;
    });

    setNotes(newNotes);
  };

  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const toggleUpdate = async (note) => {
    // get current note values
    console.log(note);
    // set state
    setUpdateForm({ title: note.title, body: note.body, _id: note._id });
  };

  const updateNote = async (e) => {
    e.preventDefault();

    const {title, body, _id} = updateForm
    const url_id = `${URL}/${_id}`

    // send update request
    const res = await axios.put(url_id, {title, body});
    console.log(res);

    // update state
    const newNotes = [...notes]
    const noteIndex = notes.findIndex(note => {
      return note._id === updateForm._id
    })
    newNotes[noteIndex] = res.data.note;

    setNotes(newNotes)

    // clear form
    setUpdateForm({ id: null, title: "", body: "" });
    console.log(res);
  }

  return (
    <>
      <div className="App">
        <div className="notes">
          <h2>Notes</h2>
          {store.notes &&
            store.notes.map((note) => {
              return (
                <div key={note._id}>
                  <h3>{note.title}</h3>
                  <button onClick={() => toggleUpdate(note)}>
                    Update note
                  </button>
                  <button onClick={() => deleteNote(note._id)}>
                    Delete note
                  </button>
                </div>
              );
            })}
        </div>

        {updateForm._id && (
        <div className="update-note">
          <h2>Update Note</h2>
          <form onSubmit={updateNote}>
            <input
              type="text"
              name="title"
              value={updateForm.title}
              onChange={handleUpdateFieldChange}
            />
            <textarea
              name="body"
              cols="30"
              rows="5"
              value={updateForm.body}
              onChange={handleUpdateFieldChange}
            ></textarea>
            <button type="submit">Update Note</button>
          </form>
        </div>)}

        {!updateForm._id && (

        <div className="create-note">
          <h2>Create Note</h2>
          <form onSubmit={store.createNote}>
            <input
              type="text"
              name="title"
              value={store.createForm.title}
              onChange={store.updateCreateFormField}
            />
            <textarea
              name="body"
              cols="30"
              rows="5"
              value={store.createForm.body}
              onChange={store.updateCreateFormField}
            ></textarea>
            <button type="submit">Create Note</button>
          </form>
        </div>)}
      </div>
    </>
  );
}

export default App;
