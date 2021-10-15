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
import Burgers from './Pages/Burger/Burgers';
import PrivateRoute from './Private/PrivateRoute';
import Order from './Pages/Order/Order';
import Cart from './Pages/Cart/Cart';
import Details from './Pages/Home/Details/Details';
function App() {
  return (
    <div className="App">
   <AuthProvider>
     <Router>
      <Header></Header>
        <Switch>
        
          <Route exact path="/">
          <Home></Home>
          </Route>
          
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/details/:foodId">
            <Details></Details>

          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
