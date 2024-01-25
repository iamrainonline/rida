import React from "react";

const WaveSVG = () => {
   return (
      <svg
         id="wave"
         style={{ transform: "rotate(0deg)", transition: "0.3s" }}
         viewBox="0 0 1440 240"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
      >
         <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
               <stop stopColor="rgba(27, 33, 42, 1)" offset="0%" />
               <stop stopColor="rgba(27, 33, 42, 1)" offset="100%" />
            </linearGradient>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
               <stop stopColor="rgba(255, 213, 206, 1)" offset="0%" />
               <stop stopColor="rgba(255, 213, 206, 1)" offset="100%" />
            </linearGradient>
         </defs>
         <rect width="100%" height="100%" fill="url(#sw-gradient-0)" />
         <rect width="100%" height="100%" fill="url(#sw-gradient-1)" />
      </svg>
   );
};

export default WaveSVG;
