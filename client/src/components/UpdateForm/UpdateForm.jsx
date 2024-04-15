import notesStore from "../../stores/notesStore";

export default function UpdateForm() {
  const store = notesStore();

  if (!store.updateForm._id) {
    return <></>;
  }

  return (
    <div className="update-note">
      <h2>Update Note</h2>
      <form onSubmit={store.updateNote}>
        <input
          type="text"
          name="title"
          value={store.updateForm.title}
          onChange={store.handleUpdateFieldChange}
        />
        <br />
        <textarea
          name="body"
          cols="30"
          rows="5"
          value={store.updateForm.body}
          onChange={store.handleUpdateFieldChange}
        ></textarea>
        <br />
        <button type="submit">Update Note</button>
      </form>
    </div>
  );
}
