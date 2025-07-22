import React, { useContext, useState } from 'react'
import CartTotal from '../assets/components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300 px-4 sm:px-5 md:px-10 lg:px-30'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <h1 className="text-center font-bold bg-gradient-to-b from-[var(--green)] to-[var(--brown)] bg-clip-text text-transparent">
            DELIVERY INFORMATION
          </h1>
        </div>
        <div className='flex gap-3'>
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
        </div>
        <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
        <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Pin Code' />
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>
        <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone Number' />
      </div>


      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <h2 className = ' text-[1rem] sm:text-[1.25rem] text-[var(--black)] font-bold pb-5'>Payment Method:</h2>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=> setMethod('razorpay')} className='flex items-center gap-3 border border-gray-300 py-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 rounded-full border border-gray-300 ${method==='razorpay' ? 'bg-green-500': ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay} alt="razorpay" />
            </div>
            <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border border-gray-300 py-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 rounded-full border border-gray-300 ${method==='cod' ? 'bg-green-500': ''}`}></p>
              <p className='text-gray-500 text-sm font-md mx-4' >CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=> navigate('/orders')} className = 'bg-black text-white px-12 py-3'>Place Order</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder
