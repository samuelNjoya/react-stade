import React from 'react'
import "./pages.css"
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'
import Services from '../services/Services'


const Pages = () => {
  return (
    <>
      <div className="content">
         <Header/>

         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
           
         </Routes>

         <Footer/>
      </div>
    </>
  )
}

export default Pages

