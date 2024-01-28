import React from 'react';
import serie1 from '../assets/series1.jpg';
import serie2 from '../assets/series2.jpg';
import Menu from '../components/Menu';

function VoirSerie() {
  return (
    <div className="bg-black text-white min-h-screen">
    <Menu/>

      <section className="voir-serie-container">
        <h1 className="section-title text-xl mb-6">Voir la Série</h1>

        <div class="saison-card ">
          <img src={serie1} alt="Saison 2" className="saison-image w-4/6" />
          </div>

          <h1 className="section-title mb-6 mt-3" >Saisons et épisodes </h1>
        <div className="flex justify-around mt-5">
          {/* Card Saison 1 */}
          <div className="saison-card">
            <img src={serie1} alt="serie1 " className="serie 1 w-2/4" />
            <div className="saison-details p-4">
              <h3 className="saison-title text-xl font-bold mb-2">Saison 1</h3>
              <p className="saison-info text-sm mb-2">Épisodes: 10</p>
              <button className="voir-button bg-red-600 text-white px-4 py-2 rounded">Voir</button>
            </div>
          </div>

          {/* Card Saison 2 */}
          <div className="saison-card">
            <img src={serie2} alt="Saison 2" className="serie 1 w-2/4"/>
            <div className="saison-details p-4">
              <h3 className="saison-title text-xl font-bold mb-2">Saison 2</h3>
              <p className="saison-info text-sm mb-2">Épisodes: 8</p>
              <button className="voir-button bg-red-600 text-white px-4 py-2 rounded">Voir</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VoirSerie;
