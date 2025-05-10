import React, { useState } from 'react'
import "./header.css" 
import { Link } from 'react-router-dom'



const Header = () => {
   //Pour rendre active la le vollet de navigation
   const [menu,setMenu] = useState("home");
  return (
    <>
     <header>
        <div className="logo">
           <span>SMART-TECH</span>
        </div>
        <div className="nav">
           <ul>
              <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""} to="/">Home</Link>
              <Link onClick={()=>setMenu("about")} className={menu==="about"?"active":""}  to="/about"> About</Link>
              <Link onClick={()=>setMenu("blog")} className={menu==="blog"?"active":""} to="/blog"> Blog</Link>
              <Link onClick={()=>setMenu("service")} className={menu==="service"?"active":""} to="/services">Services</Link>
              <Link onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""} to="/contact"> Contact</Link>
           </ul>
        </div>
     </header>
    </>
  )
}

export default Header
