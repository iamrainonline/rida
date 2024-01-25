import React from "react";
import "../CSS/Footer.css";
import wave from "../ReusableComponents/wave.png";
import wave_v2 from "../ReusableComponents/wave_v2.png";
import wave_v3 from "../ReusableComponents/wave_v3.png";
import WaveSVG from "../ReusableComponents/WaveSVG";
import wave_v4 from "../ReusableComponents/wave_v4.png";
const Footer = () => {
   return (
      <div className="footer">
         <div className="left-section">
            <h3>About Us</h3>
            <p>
               Elevate your living space with our expert interior design
               services. We create timeless and personalized designs tailored to
               your style.
            </p>
         </div>

         <div className="right-section">
            <h3>Contact Information</h3>
            <p>
               Email: info@interiordesign.com
               <br />
               Phone: +1 (123) 456-7890
               <br />
               Address: 456 Decor Street, Stylish City
            </p>
         </div>

         <div className="left-section">
            <h3>Website Builder</h3>
            <p>This website was crafted with passion by XYZ Design Studio.</p>
         </div>
         <img src={wave_v4} alt="" />
         {/* <WaveSVG /> */}
      </div>
   );
};

export default Footer;
