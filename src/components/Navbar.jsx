import React from "react";
import Logo from "./ridapng.png";

const Navbar = () => {
   return (
      <div>
         <div className="navbar">
            <div className="navbarWrapper">
               <div className="logo">
                  <img src={Logo} alt="" />
               </div>
               <div className="links">
                  <div className="link">ACASA</div>
                  <div className="link">PROIECTE</div>
                  <div className="link">CONTACT</div>
               </div>
               <div className="login">
                  <div>search</div>
                  <div>login</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
