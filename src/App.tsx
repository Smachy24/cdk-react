import "./styles/App.css";
//import Menus from "../components/Menus";
import series1 from "./assets/series1.jpg"
import series2 from "./assets/series2.jpg"
import series3 from "./assets/series3.jpg"
import { getAuth, onAuthStateChanged } from "@firebase/auth";
// import React from 'react';
import Header from './components/Header';
 import WelcomeSection from './components/WelcomeSection';
 import SeriesCard from './components/SeriesCard';


function App() {

  return (
    <div className="body font-sans m-0 p-0 bg-black text-white">
    <Header />
     <WelcomeSection />

    <section className="cards flex flex-wrap justify-around p-4 md:p-10">
      <SeriesCard image={series1} alt="Series 1" />
      <SeriesCard image={series2} alt="Series 2" />
      <SeriesCard image={series3} alt="Series 3" />
    </section> 
  </div>
  );
}

export default App;



