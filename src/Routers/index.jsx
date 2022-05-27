import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import About from "../Pages/About"
import Navbar from "..//Components/Navbar" 
import Cart from "../Pages/Cart"

const Routers = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" exact element={<About />}/>
            <Route path="/Cart" exact element={<Cart />}/>
        </Routes> 
    </Router>
     </>
  )
}

export default Routers