import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit = {onSubmitHandler} className = 'flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className = 'inline-flex items-center gap-2 mb-2 mt-10'>
        <p className = 'text-3xl font-bold'>{currentState}:</p>
      </div>
      {currentState === 'Log In' ? '': <input className = 'w-full px-3 py-2 border border-gray-800 rounded-sm' type = 'text' placeholder='Name' required/>}
      <input className = 'w-full px-3 py-2 border border-gray-800 rounded-sm' type = 'email' placeholder='Email' required/>
      <input className = 'w-full px-3 py-2 border border-gray-800 rounded-sm' type = 'password' placeholder='Password' required/>
      <div className = 'w-full flex justify-between text-sm mt-[-8px]'>
        <p className = 'cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Log In'
          ?<p className = 'cursor-pointer' onClick = {()=> setCurrentState('Sign Up')}>Create Account</p>
          :<p className = 'cursor-pointer' onClick = {()=> setCurrentState('Log In')}>Login Here</p>
        }
      </div>
      <button className = 'bg-black text-white px-8 py-3 mt-4'>{currentState === 'Log In' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
