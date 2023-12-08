import React, { useState } from 'react';
import '../styles/App.css';
import series1 from "../assets/series1.jpg"
import series3 from "../assets/series3.jpg";
//import SearchBar from '../components/SearchBar'; 
import Menu from '../components/Menu';
import SeriesSections from '../components/SeriesSections';

function AffichageSeries() {
  const [searchResults, setSearchResults] = useState([]); // État pour stocker les résultats de la recherche

  const seriesData = [
    { id: 1, title: 'Série 1', image: series1 },
    { id: 2, title: 'Série 2', image: series3 },
    { id: 3, title: 'Série 2', image: series1 },
    { id: 4, title: 'Série 2', image: series3 },
    { id: 5, title: 'Série 2', image: series1 },
  ];
  

  const chunkedSeries = (arr:any, size:any) => {
    return arr.reduce((chunks:any, el:any, i:any) => (i % size
      ? chunks[chunks.length - 1].push(el)
      : chunks.push([el])) && chunks, []);
  };

  const seriesRows = chunkedSeries(seriesData, 5);

  // Fonction de recherche pour filtrer les résultats en fonction du terme de recherche
  const handleSearch = (searchTerm:any) => {
    const results:any = seriesData.filter(series =>
      series.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="font-sans m-0 p-0 bg-black text-white">
     {/* <Menu onSearch={handleSearch} /> */}
     <Menu />

      

      <section className="serieAccueil">
        <div className="mx-40">
          <img className="ok" src={series1} alt="Série à venir" />
          <h3>Bientôt sur Netflix</h3>
        </div>
      </section>

     

      {/* Affichage des résultats de recherche */}
      {searchResults.length > 0 && (
        <section className="choices flex flex-wrap">
          {searchResults.map((series:any) => (
            <div key={series.id} className="choice flex-1 max-w-xs m-1">
              <img src={series.image} alt={series.title} className="w-full h-auto border rounded-t-md" />
              <h3 className="bg-black text-white text-center p-2 rounded-b-md">{series.title}</h3>
            </div>
          ))}
        </section>
      )}

<SeriesSections title="Horreur" seriesRows={seriesRows} />
      <SeriesSections title="Anime" seriesRows={seriesRows} />
      <SeriesSections title="Comédie" seriesRows={seriesRows} />
      <SeriesSections title="Thriller" seriesRows={seriesRows} />
    

    </div>
  );
}

export default AffichageSeries;
