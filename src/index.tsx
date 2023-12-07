import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Series from "./pages/Series";
import Profile from "./pages/Profile";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import ShowsFollowed from "./pages/ShowsFollowed";
import TestFollow from "./pages/TestFollow";


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
  },
  {
    path: "/shows-followed",
    element: <ShowsFollowed />,
  },
  {
    path: "/test-follow",
    element: <TestFollow />,
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
