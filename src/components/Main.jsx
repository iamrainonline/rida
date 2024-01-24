import React, { useEffect, useState } from "react";
import Image from "./image1-min.jpeg";
import Proiecte from "./Proiecte";

const Main = () => {
   const [scroll, setScroll] = useState();

   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY);
      });
      console.log(scroll);
   }, [scroll]);

   return (
      <div className="main">
         <div className={scroll >= 300 ? "hero" : "hero"}>
            <h1>Eleganță Modernă Neutre</h1>
            <img src={Image} alt="" />
         </div>
         <Proiecte />
      </div>
   );
};

export default Main;
