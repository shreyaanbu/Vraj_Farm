import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ContactFooter from '../assets/components/ContactFooter';

const Orders = () => {
  const {products, currency} = useContext(ShopContext);
  return (
    <div>
    <div className='border-t border-gray-300 pt-12 px-5 sm:px-10 md:px-20 lg:px-30'>
      <h1 className="text-center text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold bg-gradient-to-b from-[var(--green)] to-[var(--brown)] bg-clip-text text-transparent px-5 pb-5">
          My Orders
      </h1>
      <div>
      {
        products.slice(0,4).map((item, index) =>(
          <div key={index} className='py-4 border-t border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-20'>
            <div className = 'flex items-start gap-6 text-sm'>
              <img className = 'w-16 sm:w-20' src={item.image[0]} alt = "Product-image" />
              <div>
                <p className='text-sm sm:text-lg font-bold'>{item.name}</p>
                <div className = 'flex items-center gap-4 mt-2 text-base text-[var(--black)]'>
                  <p className = 'text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: 3kg</p>
                </div> 
                <p className='mt-2'>Date: <span className = 'text-gray-700'>22 July 2025</span></p>
              </div> 
            </div>
            <div className = 'md:w-1/2 flex justify-between'>
              <div className = 'flex items-center gap-2'>
                <p className = 'min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className = 'text-sm text-base'>Ready to ship</p>
              </div>  
              <button className = 'border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
            </div>
          </div>
        ))
      }
      </div>
      
      
    </div>
    <div className='bg-[var(--light-yellow)]'>
        <ContactFooter />
      </div>

    </div>
  )
}

export default Orders
