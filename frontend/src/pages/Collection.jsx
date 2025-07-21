import React, { useContext, useEffect, useState } from 'react'
import { products } from '@/assets/assets'
import { ShopContext } from '@/context/ShopContext'
import ProductItem from '@/assets/components/ProductItem';


const Collection = () => {
  const { products } = useContext(ShopContext);
  
  return (
    <div>
      <div className="items-center px-20 pb-20 pt-5">
        <h1 className="text-center text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold bg-gradient-to-b from-[var(--green)] to-[var(--brown)] bg-clip-text text-transparent px-5 pb-20">
          Our Products
        </h1>
        <div className = 'flex flex-row flex-wrap justify-center gap-8'>
        {
          products.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} description={item.description} sizes={item.sizes} />
          ))
        }
      </div>
      </div>
      
      
    </div>
  )
}

export default Collection
