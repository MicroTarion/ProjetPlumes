import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import HomePage from "./pages/home/index.jsx";
import LexiquePage from "./pages/lexique/index.jsx";
import { IdentifierPage, Header } from "./pages/identifier"; // Importez en tant que module nommé
import EspecesPage from "./pages/especes/index.jsx";
import "./index.css";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/lexique", element: <LexiquePage /> },
      { path: "/identifier", element: <IdentifierPage /> },
      { path: "/especes", element: <EspecesPage /> },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  
);
