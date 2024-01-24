import React, { useState, useEffect } from "react";
import data from "../utils/data";
import AOS from "aos";
import "aos/dist/aos.css";

const Proiecte = () => {
   const [currNum, setCurrNum] = useState(0);
   const [myData] = useState(data);

   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <div className="proiecte">
         <div className="proiecte_wrapper">
            {data?.map((item, idx) => (
               <div key={item.id}>
                  <div>
                     <div
                        data-aos="fade-right"
                        className="proiect"
                        onClick={() => {
                           setCurrNum(item.id);
                        }}
                     >
                        {myData[idx].name}
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className={`readmore_wrapper `}>
            <div
               className="readmore"
               style={{
                  backgroundImage: `url(/assets/${myData[currNum].image})`,
               }}
            >
               <div className="descriere">
                  <h1 className="descriere_titlu">{myData[currNum].name}</h1>
                  <p className="descriere_text">{myData[currNum].text}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Proiecte;
