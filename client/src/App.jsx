import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const URL = "http://localhost:3000/notes";

    // get notes
    const res = await axios.get(URL);

    // set on state
    console.log(res);
    setNotes(res.data.notes);
  };

  const updateCreateFormField = (e) => {
    const {name, value} = e.target;
    setCreateForm({
      ...createForm, [name]: value,
    })
    console.log({name, value});
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
                </div>
              );
            })}
        </div>

        <div className="create-note">
          <h2>Create Note</h2>
          <form action="" method="post">
            <input
              type="text"
              name="title"
              value={createForm.title}
              onChange={updateCreateFormField}
            />
            <textarea
              name="body"
              cols="30"
              rows="10"
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
