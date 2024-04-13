import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const URL = "http://localhost:3000/notes";
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
    getNotes();
  }, []);

  const getNotes = async () => {
    // get notes
    const res = await axios.get(URL);

    // set on state
    console.log(res);
    setNotes(res.data.notes);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    setCreateForm({
      ...createForm,
      [name]: value,
    });
    console.log({ name, value });
  };

  const createNote = async (e) => {
    e.preventDefault();

    // create note
    const res = await axios.post(URL, createForm);

    // update state
    setNotes([...notes, res.data.note]);

    // clear form
    setCreateForm({ title: "", body: "" });
    console.log(res);
  };

  const deleteNote = async (_id) => {
    // delete note
    const res = await axios.delete(`${URL}/${_id}`);
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

  return (
    <>
      <div className="App">
        <div className="notes">
          <h2>Notes</h2>
          {notes &&
            notes.map((note) => {
              return (
                <div key={note._id}>
                  <h3>{note.title}</h3>
                  <button onClick={() => deleteNote(note._id)}>
                    Delete note
                  </button>
                </div>
              );
            })}
        </div>

        <div className="update-note">
          <h2>Update Note</h2>
          <form action="">
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
        </div>

        <div className="create-note">
          <h2>Create Note</h2>
          <form action="" method="post" onSubmit={createNote}>
            <input
              type="text"
              name="title"
              value={createForm.title}
              onChange={updateCreateFormField}
            />
            <textarea
              name="body"
              cols="30"
              rows="5"
              value={createForm.body}
              onChange={updateCreateFormField}
            ></textarea>
            <button type="submit">Create Note</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
