import {create} from 'zustand'
import axios from "axios";

// const URL = "http://localhost:3000/notes";
// const URL = "https://ps-mern-crud-youtube.onrender.com/notes";
const PATH = "/notes";

const notesStore = create((set) => ({
  notes: null,

  createForm: {
    title: '',
    body: '',
  },

  updateForm: {
    _id: null,
    title: '',
    body: '',
  },

  getNotes: async () => {
    // get notes
    const res = await axios.get(PATH);
    // console.log(res);

    // set on state
    set({
      notes: res.data.notes
    })
    // setNotes(res.data.notes);
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm, 
          [name]: value,
        }
      }
    })
    // console.log({ name, value });
  },

  createNote: async (e) => {
    e.preventDefault();

    const {createForm, notes} = notesStore.getState();

    // create note
    const res = await axios.post(PATH, createForm);
    // console.log(res);

    // update state
    // clear form
    set({
      notes: [...notes, res.data.note],
      createForm: { title: "", body: "", }
    })
    // setNotes([...notes, res.data.note]);
    // setCreateForm({ title: "", body: "" });
  },

  deleteNote: async (_id) => {
    // delete note
    const url_id = `${PATH}/${_id}`
    const {notes} = notesStore.getState();
    const res = await axios.delete(url_id);

    // console.log(res);

    // update state
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });

    // setNotes(newNotes);
    set({
      notes: newNotes,
    })
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    // setUpdateForm({
    //   ...updateForm,
    //   [name]: value,
    // });
    set((state) => {
      return {
        updateForm: {
          ...state.updateForm, 
          [name]: value,
        }
      }
    })
  },

  toggleUpdate: async (note) => {
    // get current note values
    const {_id, title, body } = note;
    // console.log(note);
    // set state

    set({
      updateForm: {
        title, body, _id
      }
    })
    // setUpdateForm({ title: note.title, body: note.body, _id: note._id });
  },

  updateNote: async (e) => {
    e.preventDefault();

    const {updateForm, notes} = notesStore.getState();
    const {title, body, _id} = updateForm
    const url_id = `${PATH}/${_id}`

    // send update request
    const res = await axios.put(url_id, {title, body});
    console.log(res);

    // update state
    const newNotes = [...notes]
    const noteIndex = notes.findIndex(note => {
      return note._id === _id
    })
    newNotes[noteIndex] = res.data.note;

    set({
      notes: newNotes,
      updateForm: { id: null, title: "", body: "", }
    })

    // setNotes(newNotes)

    // // clear form
    // setUpdateForm({ id: null, title: "", body: "" });
    // console.log(res);
  },

}))

export default notesStore;
