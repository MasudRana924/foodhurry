import React from 'react';
import { createContext } from 'react';
import useFoods from '../Hooks/useFoods';
import useFirebase from './../Hooks/useFirebase';
import useCart from './../Hooks/useCart';


export const authContext = createContext()
const AuthProvider = (props) => {
   const {children}=props
    const allText=useFirebase()

   
  
    
    return(
        <authContext.Provider value={allText}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;