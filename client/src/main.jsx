import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import './index.css'
import axios from 'axios'

// axios.defaults.baseURL = "https://ps-mern-crud-youtube.onrender.com";
axios.defaults.baseURL = "http://localhost:3000"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
