import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import ContextProvider from './context/ContextProvider';
import Cart from './pages/Cart/Cart';
import SingUp from './pages/SignUp/SignUp';
import DataProvider from './context/ContextData';

function App() {
  
  
  return (

    <DataProvider>
  <ContextProvider>

    <Router>
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/cart" element={<Cart  />} />
      <Route path="/singup" element={<SingUp />} />
      
    </Routes>
</Router>
  </ContextProvider>

    </DataProvider>

   
  )
}

export default App
