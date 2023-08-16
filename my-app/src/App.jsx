import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import ContextProvider from './context/ContextProvider';
import Cart from './pages/Cart/Cart';
import SingUp from './pages/SignUp/SignUp';

function App() {
  
  
  return (

  <ContextProvider>

    <Router>
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/cart" element={<Cart  />} />
      <Route path="/singup" element={<SingUp />} />
      
    </Routes>
</Router>
  </ContextProvider>

   
  )
}

export default App
