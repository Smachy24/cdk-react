import React from 'react';
import series1 from '../assets/series1.jpg';
import Menu from '../components/Menu';

function Detail() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Menu/>

      <section className="flex justify-center items-center h-full mt-20">
        <div className="bg-red-950 p-6 rounded-lg w-4/6">
          <img src={series1} alt="Series 1" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-xl font-bold mb-2">Nom de la série</h2>
          <p>Année: 2023</p>

          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Résumé</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu purus luctus accumsan.</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Distribution</h3>
            <ul className="list-disc pl-4">
              <li>Acteur 1</li>
              <li>Acteur 2</li>
              <li>Acteur 3</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Saisons</h3>
            <ul className="list-disc pl-4">
              <li>Saison 1</li>
              <li>Saison 2</li>
              <li>Saison 3</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
