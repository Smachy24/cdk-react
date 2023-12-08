import React, { useEffect, useState } from 'react';
import Show from '../models/show.model'
import "./showCard.css"
import { Link } from 'react-router-dom';


function Card(props : Show) {

   
  return (
    <div className="show-card">
      <Link to={`/hub/${props.id}`}>
      {/* <h1 className="show-card-title">hello {props.name}</h1> */}
      <div className="show-card-poster-container">
        {/* <img src={`https://image.tmdb.org/t/p/w500${props.poster}`}/> */}
        {/* by default if poster link is null, link to ad adstra poster */}
        {props.poster == null ? <img src={`https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg`}/> : <img src={`https://image.tmdb.org/t/p/w500${props.poster}`}/> }
      </div>
      <div className='show-card-cover'>
        <div className='show-card-cover-infos'>
          <h2>{props.name}</h2>
          {/* <p>{props.description.substring(0, 100)}...</p> */}
          {/* by default if description is empty, create an empty USEFULL ?? */}
          {props.description.length == 0 ? 
          <p>ThatMuch intervient dans les domaines de la communication numérique & visuelle de votre entreprise. ThatMuch...</p>
          : <p>{props.description.substring(0, 100)}...</p> }

          
          <h3>{props.note}</h3>
        </div>
      </div>

      </Link>
    </div>
  );
}

export default Card;
