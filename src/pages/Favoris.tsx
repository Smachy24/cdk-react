// Favoris.js
import React from 'react';
import Header from '../components/Header';
import ShowsFollowed from '../components/ShowsFollowed';
import Menu from '../components/Menu';

// import series1 from '../assets/series1.jpg';
// import series2 from '../assets/series2.jpg';

function Favoris() {
  return (
  
    <div className="font-sans m-0 p-0 bg-black text-white h-screen">
      < Menu/>
      <ShowsFollowed />
    </div>
  );
}

export default Favoris;