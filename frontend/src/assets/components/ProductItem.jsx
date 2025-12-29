import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'

const ProductItem = ({ id, image, name, price, description, sizes }) => {
  const { currency, addToCart } = useContext(ShopContext);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='overflow-hidden max-w-[20vw] min-w-[200px]'>
      <div className='overflow-hidden' >
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="product_image" />
      </div>
      <div className='py-2'>
        <p className='text-lg font-bold'>{name}</p>
        <p className='text-md font-bold text-[var(--green)]'>{currency}{price}/kg</p>
        <p className='w-full text-justify px-2 py-1 text:sm'>{description}</p>
        <br />
        <p className='text-xs'>Choose box size:</p>
        <div className='flex gap-2 flex-wrap py-2'>
          {
            sizes.map((item, index) => (
              <p><button onClick={() => setSize(item)}
                key={index}
                className={`border border-[var(--green)] text-sm rounded-sm px-2 py-2 cursor-pointer hover:bg-[var(--green)] hover:text-white transition ${item === size ? 'border-[4px]' : ''}`}
              >
                {item}kg
              </button>
              </p>
            ))}
        </div>
        <div>
          {size && (
            <>
              <p className="text-xs mt-2">Number of boxes of {size} kg:</p>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  e.target.value === '' || e.target.value === '0'
                    ? null
                    : setQuantity(Number(e.target.value))
                }
                className="border border-gray-300 max-w-14 px-2 py-1 text-sm"
              />
            </>
          )}
        </div>
        <button
          onClick={() => addToCart(id, size, quantity)}
          disabled={!size} // disable if no size selected
          className={`text-md px-4 py-2 mt-4 mb-12 cursor-pointer ${size
              ? 'bg-[var(--green)] text-white active:bg-[var(--yellow)] active:text-[var(--brown)]'
              : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem
