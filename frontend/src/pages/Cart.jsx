import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import {assets} from '@/assets/assets'
import CartTotal from '../assets/components/CartTotal'
import ContactFooter from '../assets/components/ContactFooter'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  },[cartItems])
  return (
    <div>
      <div className="items-center sm:px-20 pt-5 pb-10">
        <h1 className="text-center text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold bg-gradient-to-b from-[var(--green)] to-[var(--brown)] bg-clip-text text-transparent px-5 pb-5">
          Your Cart
        </h1>
        <div>
          {
            cartData.map((item, index)=>{
              const productData = products.find((product) => product._id === item._id);
              return(
                <div key = {index} className = 'px-4 py-4 border-t border-b border-gray-300 grid grid-cols-[4fr_2fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '>
                  <div className = 'flex items-start gap-6 flex-wrap'>
                    <img className="w-16 sm:w-20" src={productData.image[0]} alt="product-image" />
                    <div>
                      <p className='text-sm sm:text-lg font-bold'>{productData.name}</p>
                      <div className='flex items-center gap-3 mt-2'>
                        <p className='text-md font-bold text-[var(--green)]'>{currency}{productData.price}/kg</p>
                        <p className='border border-[var(--green)] text-xs rounded-sm px-1 py-1'>{item.size}kg</p>
                      </div>
                    </div>
                  </div>
                  <input onChange={(e)=> e.target.value === '' || e.target.value === '0'?null:updateQuantity(item._id, item.size, Number(e.target.value))} className='border border-gray-300 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                  <img onClick={()=>updateQuantity(item._id, item.size, 0)} className = 'w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin} alt="delete-icon" />
                </div>
              )
            })
          }
        </div>
      </div>
      
      <CartTotal />
      <div className='text-center pb-20  border-b border-gray-300'>
        <button onClick={()=>navigate('/place-order')} className='p-4 text-[1rem] sm:text-[1.25rem] bg-[var(--black)] text-white rounded-md font-bold hover:bg-[var(--yellow)] hover:text-[var(--brown)] transition-[var(--transition)]'>Proceed to Checkout</button>
      </div>

      <ContactFooter/>
    </div>
  )
}

export default Cart
