import React from 'react';
import { createContext } from 'react';
import useFirebase from './../Hooks/useFirebase';
import { useState } from 'react';
import useFoods from './../Hooks/useFoods';


export const authContext = createContext()
const AuthProvider = (props) => {
    const allText=useFirebase()
    const food=useFoods()
  
    
    return(
        <authContext.Provider value={food,allText}>
            {props.children}
        </authContext.Provider>
    );
};

export default AuthProvider;