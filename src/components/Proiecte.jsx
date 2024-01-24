import React, { useEffect, useState } from "react";
import data from "../utils/data";
import Button from "../ReusableComponents/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Proiecte.css";

const Proiecte = () => {
   const [currNum, setCurrNum] = useState(0);
   const [myData] = useState(data);

   useEffect(() => {
      AOS.init();
   }, []);

   console.log(currNum);

   return (
      <div className="proiecte">
         <div className="proiecte_wrapper" data-aos="fade-right">
            {data?.map((item, idx) => (
               <div key={item.id}>
                  <div>
                     <div
                        style={{
                           backgroundImage: `url(/assets/${myData[idx].image})`,
                        }}
                        className={
                           currNum === idx ? "proiect proiect_activ" : "proiect"
                        }
                        onClick={() => {
                           setCurrNum(idx);
                        }}
                     >
                        <h1>{myData[idx].name}</h1>
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
                  <h1>{myData[currNum].name}</h1>
                  <p className="descriere_text">{myData[currNum].text}</p>
                  <p className="descriere_text">
                     <Button />
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Proiecte;
