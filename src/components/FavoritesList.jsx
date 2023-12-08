//import React, { useState } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import series1 from '../assets/series1.jpg';
import series2 from '../assets/series2.jpg';




function FavoritesList() {
  return (
    <div className="favorites flex flex-wrap justify-around p-4">
      <FavoriteCard image={series1} title="Series 1" />
      <FavoriteCard image={series2} title="Series 2" />
      <FavoriteCard image={series2} title="Series 2" />
    </div>
  );
}

export default FavoritesList;
