import { createContext, useEffect, useState } from 'react';
import { products } from '@/assets/assets';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const currency = '₹';
  const delivery_fee = 100;
  const navigate = useNavigate();
  
  const addToCart = async (itemId, size) => {
    if(!size){
      toast.error('Please Select Product Size.');
      return;
    }
    const audio = new Audio(assets.ding);
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
        audio.play();
      }
      else{
        cartData[itemId][size] = 1;
        audio.play();
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
      audio.play();
    }
    setCartItems(cartData);
  }

  const getCartCount = () => {
    let totalCount = 0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          
        }
      }
    }
    return totalCount;
  }

  const updateQuantity = async(itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product)=> product._id === items);
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalAmount += itemInfo.price * cartItems[items][item] * Number(item);
          }
        } catch (error) {
          
        }
      }
    }
    return totalAmount;
  }
  
  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children} 
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
