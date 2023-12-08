import "./styles/App.css";
// import Menus from "../components/Menus";
import series1 from "./assets/series1.jpg"
import series2 from "./assets/series2.jpg"
import series3 from "./assets/series3.jpg"

import React from 'react';
import { getAuth, onAuthStateChanged } from "@firebase/auth";

function App() {
  const auth = getAuth()
  let currentUser = auth.currentUser
  onAuthStateChanged(auth, (user) => {
    currentUser = user
  })

  return (
    <div className="body font-sans m-0 p-0 bg-black text-white">
      
    <header className="flex justify-between items-center bg-neutral-950 p-4 md:p-6">
      <div className="logo text-2xl font-bold text-red-800">Netflix</div>
      
    </header>

    <section className="bienvenue text-center py-16 px-4 md:px-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('bienvenue-bg.jpg')" }}>
      <h1 className="text-3xl md:text-5xl mb-8">Bienvenue sur Netflix</h1>
      <p className="text-lg md:text-xl mb-12">Films, émissions de télévision et bien plus encore en illimité. Regardez n'importe où. Annulez à tout moment.</p>
      <button className="bg-red-800 text-white px-8 py-4 text-lg">Connexion</button>
    </section>

    <section className="cards flex flex-wrap justify-around p-4 md:p-10">
      <div className="card mb-4 md:mb-0 transform transition-transform duration-300 hover:scale-105">
        <img src={series1} alt="Series 1" className="w-full h-auto rounded-md" />
      </div>
      <div className="card mb-4 md:mb-0 transform transition-transform duration-300 hover:scale-105">
        <img src={series2} alt="Series 2" className="w-full h-auto rounded-md" />
      </div>
      <div className="card mb-4 md:mb-0 transform transition-transform duration-300 hover:scale-105">
        <img src={series3} alt="Series 3" className="w-full h-auto rounded-md" />
      </div>
    </section>
  </div>
  );
}

export default App;



