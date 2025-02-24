import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from './pages/home/Home'
import Cart from "./pages/cart/Cart"
import PlaceOrder from "./pages/placeOrder/PlaceOrder"
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'


const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path='/verify' element={<Verify></Verify>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
