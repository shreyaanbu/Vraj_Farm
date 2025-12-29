import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const ProductItem = ({ id, image, name, price, description, sizes }) => {
  const { currency, addToCart } = useContext(ShopContext);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='overflow-hidden max-w-[20vw] min-w-[200px]'>
      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {image.map((img, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                src={img}
                alt={`product-${index}`}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
