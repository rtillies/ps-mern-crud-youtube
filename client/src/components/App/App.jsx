import { useState, useEffect } from "react";
import axios from "axios";
import notesStore from "../../stores/notesStore";
import Notes from "../Notes/Notes";
import UpdateForm from "../UpdateForm/UpdateForm";
import CreateForm from "../CreateForm/CreateForm";
import "./App.css";
import NotesPage from "../../pages/NotesPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from "../../pages/LoginPage";

function App() {
  // Zustand store
  // const store = notesStore();

  // State
  // const URL = "http://localhost:3000/notes";

  // const [notes, setNotes] = useState(null);
  // const [createForm, setCreateForm] = useState({
  //   title: "",
  //   body: "",
  // });
  // const [updateForm, setUpdateForm] = useState({
  //   _id: null,
  //   title: "",
  //   body: "",
  // });

  // useEffect(() => {
  //   store.getNotes();
  // }, []);

  // const getNotes = async () => {
  //   // // get notes
  //   // const res = await axios.get(URL);

  //   // // set on state
  //   // console.log(res);
  //   // setNotes(res.data.notes);
  // };

  // const updateCreateFormField = (e) => {
  //   // const { name, value } = e.target;
  //   // setCreateForm({
  //   //   ...createForm,
  //   //   [name]: value,
  //   // });
  //   // console.log({ name, value });
  // };

  // const createNote = async (e) => {
  //   // e.preventDefault();

  //   // // create note
  //   // const res = await axios.post(URL, createForm);

  //   // // update state
  //   // setNotes([...notes, res.data.note]);

  //   // // clear form
  //   // setCreateForm({ title: "", body: "" });
  //   // console.log(res);
  // };

  // const deleteNote = async (_id) => {
  //   // // delete note
  //   // const url_id = `${URL}/${_id}`
  //   // const res = await axios.delete(url_id);
  //   // console.log(res);

  //   // // update state
  //   // const newNotes = [...notes].filter((note) => {
  //   //   return note._id !== _id;
  //   // });

  //   // setNotes(newNotes);
  // };

  // const handleUpdateFieldChange = (e) => {
  //   // const { value, name } = e.target;

  //   // setUpdateForm({
  //   //   ...updateForm,
  //   //   [name]: value,
  //   // });
  // };

  // const toggleUpdate = async (note) => {
  //   // // get current note values
  //   // console.log(note);
  //   // // set state
  //   // setUpdateForm({ title: note.title, body: note.body, _id: note._id });
  // };

  // const updateNote = async (e) => {
  //   // e.preventDefault();

  //   // const {title, body, _id} = updateForm
  //   // const url_id = `${URL}/${_id}`

  //   // // send update request
  //   // const res = await axios.put(url_id, {title, body});
  //   // console.log(res);

  //   // // update state
  //   // const newNotes = [...notes]
  //   // const noteIndex = notes.findIndex(note => {
  //   //   return note._id === updateForm._id
  //   // })
  //   // newNotes[noteIndex] = res.data.note;

  //   // setNotes(newNotes)

  //   // // clear form
  //   // setUpdateForm({ id: null, title: "", body: "" });
  //   // console.log(res);
  // }

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<NotesPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
  // <Notes />
  // <UpdateForm />
  // <CreateForm />
}

export default App;
