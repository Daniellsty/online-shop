import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import ContextProvider from './context/ContextProvider';
import Cart from './pages/Cart/Cart';

function App() {
  
  
  return (

  <ContextProvider>

    <Router>
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/cart" element={<Cart  />} />
     
    </Routes>
</Router>
  </ContextProvider>

   
  )
}

export default App
