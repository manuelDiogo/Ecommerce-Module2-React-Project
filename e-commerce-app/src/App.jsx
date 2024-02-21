
import { Routes, Route } from "react-router-dom";


import Navbar from './components/Navbar'
import Footer from './components/Footer';

import About from "./pages/About";
import Error from "./pages/Error";
import Homepage from './pages/Homepage';
import Landingpage from './pages/Landingpage';
import SearchPage from './pages/SearchPage';
import ProductDetails from './pages/ProductDetails';
import {CartProvider} from './context_reducer/CartContext';
import ShoppingCart from './pages/ShoppingCart';


import './App.css'


function App() {

  return (
    
      <CartProvider>
        <Navbar />
        <Routes>

          <Route path="/" element={<Landingpage />} />

          <Route path="/home" element={<Homepage />} />

          <Route path="/details/:id" element={<ProductDetails />} />

          <Route path="/search" element={<SearchPage />} />

          <Route path="/about" element={<About />} />

          <Route path="/cart" element={<ShoppingCart/>} />


          <Route path="*" element={<Error />} />

        </Routes>
        <Footer />
      </CartProvider>
  
  );
}

export default App
