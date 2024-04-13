import notesStore from "../../stores/notesStore";
import Note from "../Note/Note";

export default function Notes() {
  const store = notesStore();

  return (
    <div className="notes">
      <h2>Notes</h2>
      {store.notes &&
        store.notes.map((note) => {
          return (
            <Note note={note} key={note._id} />
            // <div key={note._id}>
            //   <h3>{note.title}</h3>
            //   <button onClick={() => store.toggleUpdate(note)}>
            //     Update note
            //   </button>
            //   <button onClick={() => store.deleteNote(note._id)}>
            //     Delete note
            //   </button>
            // </div>
          );
        })}
    </div>
  );
}
