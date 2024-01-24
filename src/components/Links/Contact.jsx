import React from "react";
import "../../CSS/Contact.css";

const Contact = () => {
   return (
      <div className="contact-container">
         <div className="contact-info">
            <div className="address">
               <div>
                  <h2>Informatii Contact</h2>
                  <p>Location: Bucharest, Romania</p>
                  <p>Phone: +40 123 456 789</p>
                  <p>Address: Street Name, Building No.</p>
               </div>
               <div>
                  <h2>Despre Noi</h2>
                  <p>Location: Bucharest, Romania</p>
                  <p>Phone: +40 123 456 789</p>
                  <p>Address: Street Name, Building No.</p>
               </div>
            </div>
         </div>
         <div className="contact-form">
            <h2>Contact us</h2>
            <form action="#" method="post">
               <label htmlFor="name">Nume:</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="nume@exemplu.com"
               />

               <label htmlFor="email">Email:</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="email@exemplu.com"
               />

               <label htmlFor="message">Mesaj:</label>
               <textarea
                  id="message"
                  name="message"
                  rows="7"
                  required
                  placeholder="Scrieti un mesaj..."
               ></textarea>

               <button type="submit">Trimite mesaj</button>
            </form>
         </div>
      </div>
   );
};

export default Contact;
