import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {   HelmetProvider } from "react-helmet-async";


import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

import Home from './page/home';
import Html from './page/html';
import Css from './page/css';
import Javascript from './page/javascript';

const router = createBrowserRouter([
   {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Home/>,
    errorElement: <h1>sorry</h1>,
  },
  {
    path: "/html", 
    element: <Html/>,
  },

  {
    path: "/css",
    // element: <div>Hello world!</div>,
    element: <Css/>,
  },

  {
    path: "/javascript",
    // element: <div>Hello world!</div>,
    element: <Javascript/>,
  },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
