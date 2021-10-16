import React from 'react';

import { Container, Row } from 'react-bootstrap';
import Food from '../food/Food';


const Foods = (props) => {
    // const [foods,setFoods]=useState([])
    // const[cart,setCart]=useState([])
    // useEffect(()=>{
    //     fetch('./burgers.json')
    //     .then(res=>res.json())
    //     .then(data=>setFoods(data))
    // },[])
    // // const {foods}=useFoods()
    // const handleAddtoCart=(product)=>{
    //     // ...cart diye ager cart er element copy kore ,product name e new cart e rakhlam 

    //   const newCart=[...cart,product] 
    //   setCart(newCart)
    // }
    const {foods,handleAddtoCart,displayItems}=props
  
    return (
        <Container fluid style={{backgroundColor:' #121618'}} className="pb-5">
            

            <Row xs={1} md={3}>
                {
                    displayItems.map(food=><Food
                    key={food.id}
                    food={food}
                    handleAddtoCart={handleAddtoCart}
                    
                    ></Food>)
                }

            </Row>
        </Container>
    );
};

export default Foods;