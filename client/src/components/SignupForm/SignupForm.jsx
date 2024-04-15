import React from "react";
import {useNavigate} from 'react-router-dom';
import authStore from "../../stores/authStore";

export default function SignupForm() {
  const store = authStore();
  // const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();

    // Navigate
    // navigate('/login')
  }

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={store.signupForm.email}
        onChange={store.updateSignupForm}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={store.signupForm.password}
        onChange={store.updateSignupForm}
      />
      <br />
      <button type="submit">Sign up</button><br />
    </form>
  );
}
