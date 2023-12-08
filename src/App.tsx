import "./styles/App.css";
//import Menus from "../components/Menus";
import series1 from "./assets/series1.jpg"
// import React from 'react';
import Header from './components/Header';
 import WelcomeSection from './components/WelcomeSection';
 import SeriesCard from './components/SeriesCard';


function App() {

  return (
    <div className="body font-sans m-0 p-0 bg-black text-white">
    <Header />
     <WelcomeSection />

    <section className="cards flex flex-wrap justify-around p-4 h-2/1 md:p-10">
      <SeriesCard image={series1} alt="Series 1" />

    </section> 
  </div>
  );
}

export default App;



