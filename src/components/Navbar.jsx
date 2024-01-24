// Import necessary dependencies
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import Button from "../ReusableComponents/Button";
import "../CSS/Navbar.css";

const Navbar = () => {
   return (
      <div>
         <div className="navbar">
            <div className="navbarWrapper">
               <div className="logo">
                  <Link to="/" className="logo-link">
                     <img src={Logo} alt="" className="logo-image" />
                  </Link>
               </div>
               <div className="links">
                  <Link className="link" to="/">
                     ACASĂ
                  </Link>
                  <Link className="link" to="#test123">
                     PROIECTE
                  </Link>
                  <Link className="link" to="/about">
                     CONTACT
                  </Link>
               </div>
               <div className="login"></div>
               <Button />
            </div>
         </div>
      </div>
   );
};

export default Navbar;
