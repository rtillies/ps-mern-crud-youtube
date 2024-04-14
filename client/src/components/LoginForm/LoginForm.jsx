import React from 'react'

export default function LoginForm() {
  return (
    <form>
      <input type="email" name="email" placeholder='email'/><br />
      <input type="password" name="password" placeholder='password'/><br />
      <button type="submit">Login</button>
    </form>
  )
}
