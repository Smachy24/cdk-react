import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Profile from "./pages/Profile";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Hub from './pages/hub';
import ShowDetails from "./components/ShowDetails";
import ShowCalendar from "./components/ShowCalendar";
import ShowsFollowed from "./components/ShowsFollowed";
import TestFollow from "./pages/TestFollow";
import AffichageSeries from "./pages/affichageSeries";
import ContainerComments from "./components/ContainerComments";
import Calendrier from "./pages/Calendrier";
import Detail from "./pages/Detail";
import SuiviSerie from "./pages/suiviSerie";
import AvisPage from "./pages/AvisPage";
import VoirSerie from "./pages/VoirSerie";
import Favoris from "./pages/Favoris";
import Logout from "./pages/Logout";
import ContainerNote from "./components/ContainerNote";
import AddNote from "./components/AddNote";
import Mockups from "./pages/Mockups";
import UserCalendar from "./pages/UserCalendar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/hub",
    element: <Hub />,
  },
  {
    path: "/hub/:show_id",
    element: <ShowDetails/>,
  },
  {
    path: "/calendar",
    element: <UserCalendar/>,
  },
  {
    path: "/favoris",
    element: <Favoris />,
  },
  {
    path: "/test-follow",
    element: <TestFollow />,
  },
  {
    path: "/test-comments",
    element: <ContainerComments showId={12345}/>
  }
  ,
  {
    path: "/affichageSeries",
    element: <AffichageSeries/>,
  },
  {
    path: "/calendrier",
    element: <Calendrier/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
  },
  {
    path: "/suiviSerie",
    element: <SuiviSerie/>,
  },
  {
    path: "/avisPage",
    element: <AvisPage/>,
  },
  {
    path: "/voirSerie",
    element: <VoirSerie/>,
  },
  {
    path: "/logout",
    element: <Logout/>,
  },
  {
    path: "/notes",
    element: <ContainerNote showId={94722}/>,
  },
  {
    path: "/add-note",
    element: <AddNote showId={94722} userId="4b8HbuKwU9ak1CiNcKAh"/>,
  },
  {
    path: "/mockups",
    element: <Mockups/>,
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
