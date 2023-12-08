//import React from 'react';
import series1 from '../assets/series1.jpg';
import Menu from '../components/Menu';

function SuiviSerie ()  {
  return (
    <div className="bg-black text-white min-h-screen">
      <Menu/>

      <section className="suivi-container flex flex-col items-center mt-10">
        <h2 className="section-title text-3xl mb-10">Mes Séries Suivies</h2>

        <div className="cards-container flex gap-4">
        
          <div className="suivi-card bg-gray-900 rounded overflow-hidden w-64">
            <img src={series1} alt="Series 1" className="suivi-image w-full h-auto rounded-t" />
            <div className="suivi-details p-4">
              <h3 className="suivi-title text-xl font-bold mb-2">Nom de la série 1</h3>
              <p className="suivi-info text-sm">Saison en cours : Saison 3</p>
              <button className="suivi-button bg-red-600 text-white px-4 py-2 rounded-full mt-2">
                Continuer la lecture
              </button>
            </div>
          </div>

         
          <div className="suivi-card bg-gray-900 rounded overflow-hidden w-64">
            <img src={series1} alt="Series 2" className="suivi-image w-full h-auto rounded-t" />
            <div className="suivi-details p-4">
              <h3 className="suivi-title text-xl font-bold mb-2">Nom de la série 2</h3>
              <p className="suivi-info text-sm">Saison en cours : Saison 2</p>
              <button className="suivi-button bg-red-600 text-white px-4 py-2 rounded-full mt-2">
                Continuer la lecture
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SuiviSerie;
