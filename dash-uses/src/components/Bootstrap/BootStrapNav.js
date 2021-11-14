import React, { useState } from 'react'
import './BootStrapNav.css'
const BootStrapNav = () => {

  const [navbar,setNavbar] = useState(false);



const changeBackground =()=>{
    console.log(window.scrollY)
    if(window.scrollY >= 80){
        setNavbar(true);
    }else{
        setNavbar(false)
    }
}

window.addEventListener("scroll",changeBackground)



    return (
      <div>
      <nav className={navbar ? "manualNavbar startScroll navbar fixed-top navbar-expand-lg navbar-light" : "manualNavbar navbar fixed-top navbar-expand-lg navbar-light"}>
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse py-2" id="navbarNavDropdown">
            <ul className="navbar-nav px-5">
              <li className="nav-item px-2">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Why Us
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Career
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}

export default BootStrapNav
