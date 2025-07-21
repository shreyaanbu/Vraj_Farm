import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'

const ProductItem = ({id, image, name, price, description, sizes}) => {
    const {currency} = useContext(ShopContext);
    const [size, setSize] = useState('');
  return (
    <div>
      <div className = 'overflow-hidden max-w-[20vw]'>
        <img className = 'hover:scale-110 transition ease-in-out'src = {image[0]} alt = "product_image" />
      </div>
      <div className='px-5 py-2'>
        <p className='text-lg font-bold'>{name}</p>
        <p className='text-md font-bold text-[var(--green)]'>{currency}{price}/kg</p>
        <p>{description}</p>
        <br/>
        <p className='text-xs'>Choose weight:</p>
        <div className='flex gap-2 flex-wrap py-2'>
            {
                sizes.map((item, index) => (
              <button onClick = {()=>setSize(item)}
                key={index}
                className={`border border-[var(--green)] text-sm rounded-sm px-2 py-2 cursor-pointer hover:bg-[var(--green)] hover:text-white transition ${item === size ? 'border-[4px]' : ''}`}
              >
                {item}kg
              </button>
            ))
            }
        </div>
        <button className = 'bg-[var(--green)] text-white text-md px-4 py-2 mt-4 active:bg-[var(--yellow)] active:text-[var(--brown)]'>Add to Cart</button>
      </div>      
    </div>
  )
}

export default ProductItem
