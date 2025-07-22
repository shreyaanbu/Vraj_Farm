import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const CartTotal = () => {
    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full'>
      <h2 className = ' text-[1.25rem] sm:text-[1.5rem] text-[var(--black)] font-bold pb-5'>Cart Total:</h2>
      <div className = 'flex flex-col gap-2 mt-2 text-sm'>
        <div className = 'flex justify-between'>
            <p>Sub-total</p>
            <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr className = 'border-gray-300'/>
        <div className = 'flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className = 'flex justify-between'>
            <p>Total</p>
            <p>{currency}{getCartAmount() === 0 ? 0: getCartAmount()+delivery_fee}.00</p>
        </div>
      </div>

    </div>
  )
}

export default CartTotal
