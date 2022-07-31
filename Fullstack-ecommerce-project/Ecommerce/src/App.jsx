import Homepage from "./pages/Home";
import ProductList from "../src/pages/ProductList";
import Product from "../src/pages/Product";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import Cart from "../src/pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import {useSelector}  from "react-redux";


const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return(
    <BrowserRouter> 
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
        <Route path = "/register" element={user ? <Navigate to="/" replace /> :  <Register />} />

      </Routes>
   
    </BrowserRouter>

    

  ) 
};

export default App;