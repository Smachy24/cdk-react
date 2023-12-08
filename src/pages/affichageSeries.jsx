import React, { useState } from 'react';
import '../styles/App.css';
import series1 from "../assets/series1.jpg"
import series3 from "../assets/series3.jpg";
import SearchBar from '../components/SearchBar'; 

function AffichageSeries() {
  const [searchResults, setSearchResults] = useState([]); // État pour stocker les résultats de la recherche

  const seriesData = [
    { id: 1, title: 'Série 1', image: series1 },
    { id: 2, title: 'Série 2', image: series3 },
    { id: 3, title: 'Série 2', image: series1 },
    { id: 4, title: 'Série 2', image: series3 },
    { id: 5, title: 'Série 2', image: series1 },
  ];

  const chunkedSeries = (arr, size) => {
    return arr.reduce((chunks, el, i) => (i % size
      ? chunks[chunks.length - 1].push(el)
      : chunks.push([el])) && chunks, []);
  };

  const seriesRows = chunkedSeries(seriesData, 5);

  // Fonction de recherche pour filtrer les résultats en fonction du terme de recherche
  const handleSearch = (searchTerm) => {
    const results = seriesData.filter(series =>
      series.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="font-sans m-0 p-0 bg-black text-white">
      <header className="flex justify-between items-center bg-neutral-950 text-white p-5">
        <div className="logo text-2xl font-bold text-red-800">Netflix</div>
        <nav>
          <ul className="flex">
          <SearchBar onSearch={handleSearch} /> {/* barre de recherche */}
            <li className="mr-5 cursor-pointer text-xl">Accueil</li>
            <li className="mr-5 cursor-pointer text-xl">Séries</li>
            <li className="mr-5 cursor-pointer text-xl">Profil</li>
            <li className="cursor-pointer text-xl">Déconnexion</li>
          </ul>
        </nav>
      </header>

      

      <section className="serieAccueil">
        <div className="mx-40">
          <img className="ok" src={series1} alt="Série à venir" />
          <h3>Bientôt sur Netflix</h3>
        </div>
      </section>

     

      {/* Affichage des résultats de recherche */}
      {searchResults.length > 0 && (
        <section className="choices flex flex-wrap">
          {searchResults.map((series) => (
            <div key={series.id} className="choice flex-1 max-w-xs m-1">
              <img src={series.image} alt={series.title} className="w-full h-auto border rounded-t-md" />
              <h3 className="bg-black text-white text-center p-2 rounded-b-md">{series.title}</h3>
            </div>
          ))}
        </section>
      )}

      <h3>Horreur</h3>
      {seriesRows.map((row, rowIndex) => (
        <section key={rowIndex} className="choices flex flex-wrap">
          {row.map((series) => (
            <div key={series.id} className="choice flex-1 max-w-xs m-1">
              <img src={series.image} alt={series.title} className="w-full h-auto border rounded-t-md" />
              <h3 className="bg-black text-white text-center p-2 rounded-b-md">{series.title}</h3>
            </div>
          ))}
        </section>
      ))}


<h3>Annimé</h3>
      {seriesRows.map((row, rowIndex) => (
        <section key={rowIndex} className="choices flex flex-wrap">
          {row.map((series) => (
            <div key={series.id} className="choice flex-1 max-w-xs m-1">
              <img src={series.image} alt={series.title} className="w-full h-auto border rounded-t-md" />
              <h3 className="bg-black text-white text-center p-2 rounded-b-md">{series.title}</h3>
            </div>
          ))}
        </section>
      ))}



<h3>Commedie</h3>
      {seriesRows.map((row, rowIndex) => (
        <section key={rowIndex} className="choices flex flex-wrap">
          {row.map((series) => (
            <div key={series.id} className="choice flex-1 max-w-xs m-1">
              <img src={series.image} alt={series.title} className="w-full h-auto border rounded-t-md" />
              <h3 className="bg-black text-white text-center p-2 rounded-b-md">{series.title}</h3>
            </div>
          ))}
        </section>
      ))}


<h3>Thriller</h3>
      {seriesRows.map((row, rowIndex) => (
        <section key={rowIndex} className="choices flex flex-wrap">
          {row.map((series) => (
            <div key={series.id} className="choice flex-1 max-w-xs m-1">
              <img src={series.image} alt={series.title} className="w-full h-auto border rounded-t-md" />
              <h3 className="bg-black text-white text-center p-2 rounded-b-md">{series.title}</h3>
            </div>
          ))}
        </section>
      ))}

    </div>
  );
}

export default AffichageSeries;
