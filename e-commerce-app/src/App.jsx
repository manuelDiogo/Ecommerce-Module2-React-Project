import { useState, useReducer, useContext } from 'react'
import { Routes, Route } from "react-router-dom";


import Navbar from './components/Navbar'
import Footer from './components/Footer';

import About from "./pages/About";
import Error from "./pages/Error";
import Homepage from './pages/Homepage';
import Landingpage from './pages/Landingpage';
import ProductDetails from './pages/ProductDetails';
import CartContext from './context_reducer/CartContext';
import ShoppingCart from './pages/ShoppingCart';


import './App.css'


function App() {


  return (
    <div className="all" >
      <CartContext.Provider value={value}>
        <Navbar />
        <Routes>

          <Route path="/" element={<Landingpage />} />

          <Route path="/home" element={<Homepage />} />

          <Route path="/details/:id" element={<ProductDetails />} />

          <Route path="/about" element={<About />} />

          <Route path="/cart" element={<ShoppingCart/>} />


          <Route path="*" element={<Error />} />

        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>

  );
}

export default App
