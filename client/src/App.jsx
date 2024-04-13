import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = async () => {
    const URL = 'http://localhost:3000/notes'

    // get notes
    const res = await axios.get(URL)

    // set on state
    console.log(res);
    setNotes(res.data.notes)
  }

  return (
    <>
      <div className="App">
        <h2>Notes</h2>
        {notes && notes.map(note => {
          return <div key={note._id}>
            <h3>{note.title}</h3>
          </div>
        })}
      </div>
    </>
  )
}

export default App
