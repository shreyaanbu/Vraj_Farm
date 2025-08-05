import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({setToken}) => {
  return (
    <div className = 'bg-white flex items-center justify-between py-2 px-[4%]'>
      <img className='w-[max(10%,80px)]' src = {assets.logo} alt = "" />
      <button onClick = {() => setToken('')} className = 'bg-[var(--green)] text-white font-bold px-5 py-2 sm:px-7 sm:py-2 rounded-sm text-xs sm:text-sm cursor-pointer hover:bg-[var(--yellow)] hover:text-[var(--brown)]'>Log Out</button>
    </div>
  )
}

export default Navbar
