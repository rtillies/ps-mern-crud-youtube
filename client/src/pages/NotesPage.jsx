import { useEffect } from "react";
import notesStore from "../stores/notesStore";
import Notes from "../components/Notes/Notes";
import UpdateForm from "../components/UpdateForm/UpdateForm";
import CreateForm from "../components/CreateForm/CreateForm";

export default function NotesPage() {
  // Zustand store
  const store = notesStore();

  useEffect(() => {
    store.getNotes();
  }, []);

  return (
    <div>
      <Notes />
      <UpdateForm />
      <CreateForm />
    </div>
  );
}
