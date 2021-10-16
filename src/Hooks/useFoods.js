import { useEffect } from "react"
import { useState } from "react"

const useFoods=()=>{
    const [foods,setFoods]=useState([])
   
    useEffect(()=>{
        fetch('./burgers.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    // return necessary things 
    return [foods,setFoods]
}
export default useFoods