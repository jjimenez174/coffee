import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'

function App() {

  return (
    <div classname = 'app'>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/shop' element={<Shop/>} />

    </Routes>
    </div>
  )
}

export default App
