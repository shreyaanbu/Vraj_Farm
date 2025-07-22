import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Orders from './pages/Orders'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Navbar from './assets/components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div >
      <ToastContainer />
      <Navbar />

        <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/collection' element = {<Collection/>} />
        <Route path = '/orders' element = {<Orders/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/place-order' element = {<PlaceOrder/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/contact' element = {<Contact/>} />
      </Routes> 
    </div>
  )
}

export default App
