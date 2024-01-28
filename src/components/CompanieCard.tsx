import React, { useEffect, useState } from 'react';
import Companie from '../models/companie.model';
import './companieCard.css'


function CompanieCard(props : Companie) {

   
  return (
    <div className="companie-card">
      <div className="companie-card-poster-container">
        {/* by default if logo link is null, link to ad wolf logo as placeholder*/}
        {props.logo_path == null ? <img src={`https://image.tmdb.org/t/p/original/jH9KNT9C9fYMrGqD4IKLlRL6MYN.png`}/> : <img src={`https://image.tmdb.org/t/p/w500${props.logo_path}`}/> }
      </div>
      <div className='companie-card-cover'>
        <div className='companie-card-cover-infos'>
          <h2>{props.name}</h2>
          <h3>{props.origin_country}</h3>
        </div>
      </div>

    </div>
  );
}

export default CompanieCard;
