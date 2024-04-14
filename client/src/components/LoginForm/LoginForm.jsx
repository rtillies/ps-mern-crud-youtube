import React from 'react'

export default function LoginForm() {
  return (
    <form>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  )
}
