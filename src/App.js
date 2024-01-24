import React, { useEffect, useState } from "react";
import {
   createBrowserRouter as Router,
   RouterProvider,
   Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Links/Contact";
import "./App.css";
// components
import Main from "./components/Main";

// Layout
const Layout = () => {
   return (
      <div>
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

const router = Router([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Main />,
         },

         {
            path: "/about",
            element: <Contact />,
         },
      ],
   },
]);

const App = () => {
   const [myopacity, setMyopacity] = useState("container");

   setTimeout(() => {
      setMyopacity("container container_opacity");
   }, 50);

   return (
      <div className="app">
         <div className={myopacity}>
            <RouterProvider router={router} />
         </div>
      </div>
   );
};

export default App;
