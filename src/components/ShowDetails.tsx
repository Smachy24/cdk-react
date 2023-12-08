import React, { useEffect, useState } from 'react';
import { getShowDetailsById } from '../utils/showRequests';
import { useParams } from 'react-router-dom';
import ShowCard from '../components/ShowCard';
import Show from '../models/show.model'
import DetailedShow from '../models/detailedShow.model';
import './showDetails.css'
import SeasonCard from './SeasonCard'
import { Link } from 'react-router-dom';
import CompanieCard from './CompanieCard';


function ShowDetails() {
    
    const {show_id} = useParams<string>()

    const [currentShow, setCurrentShow] = useState<DetailedShow>()


    const getShowDetails = async () =>
    {
      const show = await getShowDetailsById(Number.parseInt(show_id ?? "42976")) as DetailedShow  // TODO GERER ERREUR DE ROUTE INCONNUE
      setCurrentShow(show)
    }

    // On mount
    useEffect(()=> {
      getShowDetails()
  }, [])


  return (
    <div className="show-details">
        {
          currentShow ?
          <div>
            <div className='show-details-hero'>

              <div className='show-details-infos'>
                <Link to={`/hub`}><button>back</button></Link>
                <h1 className='show-details-title'>{currentShow.name}</h1>

                {/* if the description is empty, use placeholder text */}
                {currentShow.overview.length == 0 ? 
                  <p>ThatMuch intervient dans les domaines de la communication numérique & visuelle de votre entreprise. ThatMuch vous accompagne dans toutes les étapes de votre projet afin d’atteindre vos objectifs et le faire décoller. Notre expertise et expérience dans la création et le suivi des projets, nous permettent de mettre en œuvre une réponse efficace à vos demandes.</p>
                  : <p>{currentShow.overview}</p> }

                {/* Distribution companie*/}
                <div className='show-details-companies'>
                  {currentShow.production_companies.map((companie)=> <CompanieCard id={companie.id} name={companie.name} logo_path={companie.logo_path} origin_country={companie.origin_country}/>)}
                </div>
              </div>


              <div className='show-details-poster'>
                {currentShow.poster_path == null ? <img src={`https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg`}/> : <img src={`https://image.tmdb.org/t/p/w500${currentShow.poster_path}`}/> }
              </div>
            </div>


            <div className='show-details-seasons'>
                {/* {currentShow.seasons.map((season)=> <h2>{season.name} - {season.episode_count}</h2> )} */}
                {currentShow.seasons.map((season)=> <SeasonCard id={season.id} name={season.name} poster_path={season.poster_path} episode_count={season.episode_count}/>)}
            </div>

          </div>


          // if the route parameter doesn't match any show, use this placeholder message.
          : <h1>404 : Nothing to see here kids !</h1>
        }
    </div>
  );
}

export default ShowDetails;



