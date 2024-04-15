import React from "react";
import {useNavigate} from 'react-router-dom';
import authStore from "../../stores/authStore";

export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();

    // Navigate
    navigate('/')
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={store.loginForm.email}
        onChange={store.updateLoginForm}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={store.loginForm.password}
        onChange={store.updateLoginForm}
      />
      <br />
      <button type="submit">Login</button><br />
      <p>Logged in: {store.loggedIn}</p>
    </form>
  );
}
