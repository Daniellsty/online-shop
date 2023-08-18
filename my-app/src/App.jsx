import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContextProvider from './context/ContextProvider';
import Cart from './pages/Cart/Cart';
import SingUp from './pages/SignUp/SignUp';
import DataProvider from './context/ContextData';
import Product from './pages/Products/Product';
import Home from './pages/Home/Home';

function App() {
  
  
  return (

    <DataProvider>
  <ContextProvider>

    <Router>
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/cart" element={<Cart  />} />
      <Route path="/singup" element={<SingUp />} />
      <Route path="/product" element={<Product />} />
      
    </Routes>
</Router>
  </ContextProvider>

    </DataProvider>

   
  )
}

export default App
