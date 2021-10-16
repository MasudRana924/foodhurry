import { useState, useEffect } from 'react';
import { getStoredCart } from './fakeDb';

import useFoods from './useFoods';

const useCart = (foods) => {
 
    const [cart, setCart] = useState([])
    useEffect(() => {
        if (foods.length) {
          const savedCart = getStoredCart()
          const storedCart = []
          for (const name in savedCart) {
    
            const addedProduct = foods.find(food => food.name === name)
            if (addedProduct) {
              const quantity = savedCart[name]
              addedProduct.quantity = quantity
              console.log(addedProduct)
              storedCart.push(addedProduct)
            }
    
          }
          setCart(storedCart)
        }
      }, [foods])
    return[cart,setCart]

}
export default useCart