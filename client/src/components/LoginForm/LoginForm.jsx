import React from "react";
import authStore from "../../stores/authStore";

export default function LoginForm() {
  const store = authStore();

  return (
    <form onSubmit={store.login}>
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
      <button type="submit">Login</button>
    </form>
  );
}
