import {create} from 'zustand'
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: "",
    password: "",
  },

  signupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const {name, value} = e.target

    set(state => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        }
      }
    })
  },

  updateSignupForm: (e) => {
    const {name, value} = e.target

    set(state => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        }
      }
    })
  },

  login: async (e) => {
    // e.preventDefault(); handled elsewhere
    const {loginForm} = authStore.getState()
    // const res = await axios.post('/login', loginForm, {withCredentials: true})
    const res = await axios.post('/login', loginForm) 
    // withCredentials handled globally in main.jsx
    
    // clear form after submission
    set({
      loginForm: {
        email: '',
        password: '',
      }
    })

    set({loggedIn: true})
  },

  checkAuth: async() => {
    try {
      // await axios.get('/check-auth', {withCredentials: true})
      await axios.get('/check-auth') 
      // withCredentials handled globally in main.jsx
      set({loggedIn: true})
    } catch (error) {
      set({loggedIn: false})
    }
  },

  signup: async() => {
    const {signupForm} = authStore.getState()
    const res = await axios.post('/signup', signupForm) 
    // withCredentials handled globally in main.jsx
    // const res = await axios.post('/signup', signupForm, {withCredentials: true})

    // clear form after submission
    set({
      signupForm: {
        email: '',
        password: '',
      }
    })

    console.log(res);
  },

  logout: async () => {
    // axios.get('/logout', {withCredentials: true})
    axios.get('/logout') // withCredentials handled globally in main.jsx
    set({
      loggedIn: false,
    })
  }

}))

export default authStore;
