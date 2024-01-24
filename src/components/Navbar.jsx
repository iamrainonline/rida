import React from "react";
import { Link } from "react-router-dom";
import Logo from "./ridapng.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
   return (
      <div>
         <div className="navbar">
            <div className="navbarWrapper">
               <div className="logo">
                  <img src={Logo} alt="" />
               </div>
               <div className="links">
                  <Link className="link" to="/">
                     ACASA
                  </Link>
                  <Link className="link" to="/">
                     PROIECTE
                  </Link>
                  <Link className="link" to="/about">
                     CONTACT
                  </Link>
                  <Link className="link" to="/about">
                     INFO
                  </Link>
               </div>
               <div className="login">
                  <div className="searchBar">
                     <CiSearch className="search-icon" size={20} />
                     <input
                        type="search"
                        placeholder="Cauta..."
                        className="search-input"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
