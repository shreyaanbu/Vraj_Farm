import { createContext } from 'react';
import { products } from '@/assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const value = {
    products,
    currency: '₹',
    delivery_fee: 100
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children} 
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
