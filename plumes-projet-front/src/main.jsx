import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import HomePage from  "./pages/home/index.jsx";
import LexiquePage from  "./pages/lexique/index.jsx";
import IdentifierPage from  "./pages/identifier";
import EspecesPage from  "./pages/especes/index.jsx";


import './index.css'

const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/lexique", element: <LexiquePage /> },
        { path: "/identifier", element: <IdentifierPage/> },
        { path: "/especes", element: <EspecesPage/> },
      ],
    },
  ]);



  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );


