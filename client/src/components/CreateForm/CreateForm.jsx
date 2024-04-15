import notesStore from "../../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div className="create-note">
      <h2>Create Note</h2>
      <form onSubmit={store.createNote}>
        <input
          type="text"
          name="title"
          value={store.createForm.title}
          onChange={store.updateCreateFormField}
        />
        <br />
        <textarea
          name="body"
          cols="30"
          rows="5"
          value={store.createForm.body}
          onChange={store.updateCreateFormField}
        ></textarea>
        <br />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
}
