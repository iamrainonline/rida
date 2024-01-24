import React from "react";
import {
   createBrowserRouter as Router,
   RouterProvider,
   Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Contact from "./components/Links/Contact";
import "./App.css";
// components
import Main from "./components/Main";
import Proiecte from "./components/Proiecte";

// Layout
const Layout = () => {
   return (
      <div>
         <Navbar />
         <Outlet />
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
   return (
      <div className="app">
         <div className="container">
            <RouterProvider router={router} />
         </div>
      </div>
   );
};

export default App;
