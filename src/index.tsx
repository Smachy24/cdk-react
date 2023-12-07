import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Series from "./pages/Series";
import Profile from "./pages/Profile";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import AffichageSeries from "./pages/affichageSeries";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/inscription",
    element: <Inscription/>,
  },
  {
    path: "/connexion",
    element: <Connexion/>,
  }
  ,
  {
    path: "/affichageSeries",
    element: <AffichageSeries/>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
