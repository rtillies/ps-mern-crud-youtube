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
    const res = await axios.post('/login', loginForm, {withCredentials: true})

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
      await axios.get('/check-auth', {withCredentials: true})
      set({loggedIn: true})
    } catch (error) {
      set({loggedIn: false})
    }
  },

  signup: async() => {
    const {signupForm} = authStore.getState()
    const res = await axios.post('/signup', signupForm, {withCredentials: true})

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
    axios.get('/logout', {withCredentials: true})
    set({
      loggedIn: false,
    })
  }

}))

export default authStore;
