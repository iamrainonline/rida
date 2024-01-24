import React from "react";
import "./Button.css";

const Button = () => {
   return (
      <div>
         <a href="#" class="cta">
            <span>Mai mult</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
               <path d="M1,5 L11,5"></path>
               <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
         </a>
      </div>
   );
};

export default Button;
