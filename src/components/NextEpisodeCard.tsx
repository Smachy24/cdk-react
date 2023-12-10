import React, { useEffect, useState } from 'react';
import NextEpisode from '../models/nextEpisode.model';
import './nextEpisodeCard.css'


function NextEpisodeCard(props : NextEpisode) {

    const date:Date = new Date(props.air_date);
    const day = date.getDay();
    const fullyear = date.getFullYear();
    const month = date.getMonth();
    const dayNumber = date.getDate();

    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "September", "Octobre", "Novembre", "Decembre"]



   
    return (
        <div className="next-episode-card">
        {/* <h1 className="show-card-title">hello {props.name}</h1> */}
        <div className="next-episode-card-poster-container">
            {/* by default if poster link is null, link to ad adstra poster */}
            {/* {props.poster_path == null ? <img src={`https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg`}/> : <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}/> } */}
            <p>SOON !</p>
        </div>
        <div className='next-episode-card-cover'>
            <div className='next-episode-card-cover-infos'>
            <h2>{props.name}</h2>
            {/* <h3>show id : {props.show_id}</h3> */}
            <h3> Release : {days[day-1]} {dayNumber} {months[month]} {fullyear}</h3>
            </div>
        </div>

        </div>
    );
}

export default NextEpisodeCard;
