import React from "react";
import Image from "./image1-min.jpeg";
import Proiecte from "./Proiecte";

const Main = () => {
   return (
      <div className="main">
         <img src={Image} alt="" />
         <Proiecte />
      </div>
   );
};

export default Main;
