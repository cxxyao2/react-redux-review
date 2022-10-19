import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'

export default function Auth() {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
