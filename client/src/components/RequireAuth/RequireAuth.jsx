import React, { useEffect } from 'react'
import authStore from '../../stores/authStore'

export default function RequireAuth(props) {
  const store = authStore()

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth()
    }
  }, [])

  if (!store.loggedIn) {
    return <div>Please Login!</div>
  }
  return (
    <div>{props.children}</div>
  )
}
