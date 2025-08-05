import React, { useState }  from 'react'
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] =  useState('');

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
      if(response.data.success){
        setToken(response.data.token)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-[var(--light-yellow)]'>
      <div className='bg-white shadow-md rounded-lg px-10 py-6 max-w-md'>
        <form onSubmit={onSubmitHandler}>
          <div >
            <p className='text-3xl font-bold mb-12 text-center'>Admin Panel:</p>
          </div>
          <div className='mb-6 min-w-72'>
            <p>Your Email:</p>
            <input onChange = {(e) => setEmail(e.target.value)} value = {email} className='w-full px-3 py-2 border border-gray-800 rounded-sm' type='email' placeholder='Email' required />
          </div>
          <div className='mb-6 min-w-72'>
            <p>Password:</p>
            <input onChange = {(e) => setPassword(e.target.value)} value = {password} className='w-full px-3 py-2 border border-gray-800 rounded-sm' type='password' placeholder='Password' required />
          </div>

          <button type="submit" className='bg-black text-white w-full px-8 py-3 mt-4 mb-8 rounded-sm cursor-pointer'>Log In</button>
        </form>

      </div>
    </div>
  )
}

export default Login
