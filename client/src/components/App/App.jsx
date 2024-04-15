import { useState, useEffect } from "react";
import axios from "axios";
import notesStore from "../../stores/notesStore";
import Notes from "../Notes/Notes";
import UpdateForm from "../UpdateForm/UpdateForm";
import CreateForm from "../CreateForm/CreateForm";
import "./App.css";
import NotesPage from "../../pages/NotesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import RequireAuth from "../RequireAuth/RequireAuth";
import SignupPage from "../../pages/SignupPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>

          <Routes>
            <Route
              index 
              element={
                <RequireAuth>
                  <NotesPage />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
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
