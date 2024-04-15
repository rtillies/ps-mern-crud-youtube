import {useEffect} from 'react'
import authStore from '../stores/authStore'

export default function LogoutPage() {
  const store = authStore()
  useEffect(() => {
    store.logout()
  }, [])
  
  return (
    <>
      <h2>You are logged out</h2>
    </>
  )
}
