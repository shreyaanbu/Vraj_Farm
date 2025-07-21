import React, { useState } from 'react';
import {assets} from '@/assets/assets.js';
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {

    const [visible, setVisible] = useState(false);
  return (
    <div className = "w-full flex items-center justify-between p-4 font-medium bg-white lg:px-8">
        <NavLink to = '/'>
            <img src = {assets.logo} className = "w-24 sm:w-32" alt = "logo" />
        </NavLink>
      
      <ul className = "hidden sm:flex gap-10 text-lg text-gray-700">
        <NavLink to = '/about' className = "flex flex-col items-center gap-1">
            <p>About Us</p>
        </NavLink>

        <NavLink to = '/collection' className = "flex flex-col items-center gap-1">
            <p>Order</p>
        </NavLink>

        <NavLink to = '/contact' className = "flex flex-col items-center gap-1">
            <p>FAQs</p>
        </NavLink>
        </ul>

        <div className = "flex items-center gap-8">
            <Link to = '/cart' className = "relative">
                <img className = "w-5 cursor-pointer" src = {assets.cart} alt = "cart" />
                <p className = "absolute right-[-8px] bottom-[-1px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
            </Link>

            <div className = "group relative">
            <img className = "w-5 cursor-pointer" src = {assets.user_icon} alt = "user" />
            <div className = "group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className = "flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p className = "cursor-pointer hover:text-black">My Profile</p>
                    <p className = "cursor-pointer hover:text-black">Orders</p>
                    <p className = "cursor-pointer hover:text-black">Log Out</p>
                </div>
            </div>
            
        </div>
        <img onClick={()=>setVisible(true)} src={assets.menu} alt = "menu" className = "w-5 cursor-pointer sm:hidden mr-5" />
    </div>    
        {/*Side bar menu for small screens*/}
        <div className = {`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className = 'flex flex-col text-gray-600'>
                <div onClick = {()=>setVisible(false)} className = 'flex items-center gap-4 pd-3 cursor-pointer'>
                    <img src = {assets.close} className = 'w-8 m-8 ml-auto' alt = "back" />
                </div>
                <NavLink onClick = {() => setVisible(false)} className = 'py-2 px-6' to='/'>Home</NavLink>
                <NavLink onClick = {() => setVisible(false)} className = 'py-2 px-6' to='/about'>About Us</NavLink>
                <NavLink onClick = {() => setVisible(false)} className = 'py-2 px-6' to='/collection'>Order</NavLink>
                <NavLink onClick = {() => setVisible(false)} className = 'py-2 px-6' to='/contact'>FAQs</NavLink>
            </div>
        </div>
    </div>
        

      
    
  )
}

export default Navbar
