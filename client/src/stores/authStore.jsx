import {create} from 'zustand'
import axios from "axios";

const PATH = "/notes";

const authStore = create((set) => ({
  loginForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const {name, value} = e.target
    // const {loginForm} = authStore.getState()

    set(state => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        }
      }
    })
  },
}))

export default authStore;
