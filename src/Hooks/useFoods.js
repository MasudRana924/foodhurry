import { useEffect } from "react"
import { useState } from "react"

const useFoods=()=>{
    const [foods,setFoods]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('./burgers.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])

    const handleCart=(food)=>{
       
        console.log(food)
        // ager cart er element ... copy pore food diye notun cart 
        const newCart= [...cart,food]
        console.log("NewCart",newCart);
        setCart(newCart)
    }
    // return necessary things 
    return {foods,setFoods,handleCart,cart,setCart}
}
export default useFoods