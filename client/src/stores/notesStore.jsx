import {create} from 'zustand'
import axios from "axios";

const URL = "http://localhost:3000/notes";

const notesStore = create((set) => ({
  notes: null,

  createForm: {
    title: '',
    body: '',
  },

  getNotes: async () => {
    // get notes
    const res = await axios.get(URL);
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
}))

export default notesStore;

// export default function Notes() {
//   return (
//     <div className="notes">
//     <h2>Notes</h2>
//     {notes &&
//       notes.map((note) => {
//         return (
//           <div key={note._id}>
//             <h3>{note.title}</h3>
//             <button onClick={() => toggleUpdate(note)}>
//               Update note
//             </button>
//             <button onClick={() => deleteNote(note._id)}>
//               Delete note
//             </button>
//           </div>
//         );
//     })}
//   </div>
// )
// }