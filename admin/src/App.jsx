import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import {Route, Routes} from "react-router-dom"
import Add from './pages/add/Add'
import Orders from './pages/orders/Orders'
import List from './pages/list/List'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "https://food-del-backend-jxug.onrender.com"

  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <hr/>
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/orders' element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
