import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header'
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider'
import PrivateRoute from './Private/PrivateRoute';
import Order from './Pages/Order/Order';
import Cart from './Pages/Cart/Cart';
import Details from './Pages/Home/Details/Details';
import { useState, useEffect } from 'react';

import { addToDb, getStoredCart } from './Hooks/fakeDb'

function App() {
  const [foods, setFoods] = useState([])
  const [cart, setCart] = useState([])
  const [displayItems, setDisplayItems] = useState([])
  useEffect(() => {
    fetch('./burgers.json')
      .then(res => res.json())
      .then(data =>{
         
        setFoods(data)
        setDisplayItems(data)
      } )
  }, [])
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
  // const {foods}=useFoods()
  const handleAddtoCart = (product) => {
    // ...cart diye ager cart er element copy kore ,product id e new cart e rakhlam 
    console.log(product);
    const newCart = [...cart, product]
    setCart(newCart)
    addToDb(product.name)
  }
  const handleSearch = event => {
    const searchText = (event.target.value)
    // filterkoreante hobe data 
    const matchedItems = foods.filter(food => food.title.toLowerCase().includes(searchText.toLowerCase()))
    setDisplayItems(matchedItems)
    console.log(matchedItems.length)
  }
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header handleAddtoCart={handleAddtoCart} handleSearch={handleSearch} cart={cart}
          ></Header>
          <Switch>

            <Route exact path="/">
              <Home displayItems={displayItems} handleAddtoCart={handleAddtoCart} cart={cart} foods={foods}></Home>
            </Route>

            <Route path="/home">
              <Home displayItems={displayItems} handleAddtoCart={handleAddtoCart} cart={cart} foods={foods}></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/details/:foodId">
              <Details></Details>

            </Route>
            <Route path="/cart">
              <Cart cart={cart} setCart={setCart} foods={foods} setFoods={setFoods}></Cart>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
