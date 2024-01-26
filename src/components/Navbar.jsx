// Import necessary dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Capture.JPG";
import Button from "../ReusableComponents/Button";
import "../CSS/Navbar.css";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <div>
         <div className={`navbar ${menuOpen ? "menu-open" : ""}`}>
            <div className="navbarWrapper">
               <div className="logo">
                  <Link to="/" className="logo-link">
                     <img src={Logo} alt="" className="logo-image" />
                  </Link>
               </div>
               <div className={menuOpen ? "links" : "links_mobile"}>
                  <Link className="link" to="/" onClick={toggleMenu}>
                     ACASĂ
                  </Link>
                  <Link className="link" to="/portfolio" onClick={toggleMenu}>
                     PROIECTE
                  </Link>
                  <Link className="link" to="/about" onClick={toggleMenu}>
                     CONTACT
                  </Link>
               </div>
               <div className="burger-menu" onClick={toggleMenu}>
                  <div className={`bar ${menuOpen ? "bar1" : ""}`}></div>
                  <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
                  <div className={`bar ${menuOpen ? "bar3" : ""}`}></div>
               </div>
               <div className="login">
                  <Button />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
