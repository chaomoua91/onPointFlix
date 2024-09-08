import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./components/App/App.tsx";
import "./index.css";
import axios from "axios";
import { tmdbApiToken } from "./constants.ts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";

// Set default axios config
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${tmdbApiToken}`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Footer",
    element: <Footer />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
