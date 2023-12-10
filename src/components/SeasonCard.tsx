import React, { useEffect, useState } from 'react';
import Season from '../models/season.model'
import './seasonCard.css'


function SeasonCard(props : Season) {

   
  return (
    <div className="season-card">
      {/* <h1 className="show-card-title">hello {props.name}</h1> */}
      <div className="season-card-poster-container">
        {/* by default if poster link is null, link to ad adstra poster */}
        {props.poster_path == null ? <img src={`https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg`}/> : <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}/> }
      </div>
      <div className='season-card-cover'>
        <div className='season-card-cover-infos'>
          <h2>{props.name}</h2>
          
          <h3>{props.episode_count} Episodes</h3>
        </div>
      </div>

    </div>
  );
}

export default SeasonCard;
