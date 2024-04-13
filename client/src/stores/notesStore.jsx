import {create} from 'zustand'
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,

  getNotes: async () => {
    // get notes
    const res = await axios.get(URL);
    // console.log(res);

    // set on state
    set({
      notes: res.data.notes
    })
    // setNotes(res.data.notes);
  }
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