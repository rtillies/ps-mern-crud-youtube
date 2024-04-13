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
    const res = axios.get(URL)

    // set on state
    console.log(res);
  }

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App
