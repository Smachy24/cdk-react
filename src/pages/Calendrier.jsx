//import React from 'react';
import series1 from '../assets/series1.jpg';
//import series2 from '../assets/series2.jpg';
import Menu from '../components/Menu';

function Calendrier() {
  return (
    <div className="bg-black  text-white min-h-screen">
     <Menu/>

      <section className="flex justify-center items-center h-full mt-5 mb-5">
        <ul className="flex flex-col gap-8">
          <div className="flex gap-8">
            <li className="episode-card">
              <div className="day">Lundi</div>
              <div className="date">24 Janvier 2023</div>
              <img src={series1} alt="Series 1" className="episode-image" />
              <div className="episode-title">Série 1 - Épisode 5</div>
            </li>
            <li className="episode-card">
              <div className="day">Mardi</div>
              <div className="date">25 Janvier 2023</div>
              <img src={series1} alt="Series 2" className="episode-image" />
              <div className="episode-title">Série 2 - Épisode 3</div>
            </li>
          </div>

          <div className="flex gap-8">
            <li className="episode-card">
              <div className="day">Mercredi</div>
              <div className="date">25 Janvier 2023</div>
              <img src={series1} alt="Series 3" className="episode-image" />
              <div className="episode-title">Série 3 - Épisode 3</div>
            </li>
            <li className="episode-card">
              <div className="day">Jeudi</div>
              <div className="date">25 Janvier 2023</div>
              <img src={series1} alt="Series 4" className="episode-image" />
              <div className="episode-title">Série 4 - Épisode 3</div>
            </li>
          </div>

          <div className="flex gap-8">
            <li className="episode-card">
              <div className="day">Vendredi</div>
              <div className="date">25 Janvier 2023</div>
              <img src={series1} alt="Series 5" className="episode-image" />
              <div className="episode-title">Série 5 - Épisode 3</div>
            </li>
            <li className="episode-card">
              <div className="day">Samedi</div>
              <div className="date">25 Janvier 2023</div>
              <img src={series1} alt="Series 6" className="episode-image" />
              <div className="episode-title">Série 6 - Épisode 3</div>
            </li>
          </div>

          <div className="flex">
            <li className="episode-card w-2/4">
              <div className="day">Dimanche</div>
              <div className="date">25 Janvier 2023</div>
              <img src={series1}alt="Series 7" className="episode-image" />
              <div className="episode-title">Série 7 - Épisode 3</div>
            </li>
          </div>
        </ul>
      </section>
    </div>
  );
}

export default Calendrier;
