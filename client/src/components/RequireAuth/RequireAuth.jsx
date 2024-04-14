import React from 'react'
import authStore from '../../stores/authStore'

export default function RequireAuth(props) {
  const store = authStore()

  if (!store.loggedIn) {
    return <div>Please Login!</div>
  }
  return (
    <div>{props.children}</div>
  )
}