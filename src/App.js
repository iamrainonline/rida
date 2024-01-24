import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
// components
import Main from "./components/Main";
import Proiecte from "./components/Proiecte";

const App = () => {
   return (
      <div>
         <Navbar />
         <Main />
         <Proiecte />
      </div>
   );
};

export default App;
