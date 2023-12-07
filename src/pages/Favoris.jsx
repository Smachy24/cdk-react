// Favoris.js
import React from 'react';
import Header from '../components/Header';
import FavoritesList from '../components/FavoritesList';

// import series1 from '../assets/series1.jpg';
// import series2 from '../assets/series2.jpg';

function Favoris() {
  return (
    <div className="font-sans m-0 p-0 bg-black text-white h-screen">
      <Header />
      <FavoritesList />
    </div>
  );
}

export default Favoris;
