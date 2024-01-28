import React, { useEffect, useMemo, useState } from 'react';
import { getShowDetailsById } from '../utils/showRequests';
import { useParams } from 'react-router-dom';
import ShowCard from '../components/ShowCard';
import Show from '../models/show.model'
import DetailedShow from '../models/detailedShow.model';
import NextEpisode from '../models/nextEpisode.model';
import './showCalendar.css'
import { Link } from 'react-router-dom';
import NextEpisodeCard from './NextEpisodeCard';
import OnAirShow from '../models/onAirShow.model';

function ShowCalendar() {




    const followedShow : number[] = [549, 94722, 219109, 72879, 94722, 219109]

    //const onAirShow : OnAirShow[] = ()
    const [onAirShow, setOnAirShow] = useState<OnAirShow[]>([])

    const getOnAirShows = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=2b442b2506a3b0c6eac43c9bc95810b3`)
        const resonseJson = await response.json()

        const showsJson = resonseJson.results
        const shows = showsJson as OnAirShow[]

        setOnAirShow(shows)
        // console.log("on air : " + shows)
    }


    const [nextEpisodes, setNextEpisodes] = useState<NextEpisode[]>([])
    const [detailedShows, setDetailedShows] = useState<DetailedShow[]>([])
    const nextEpisodeRecovered:NextEpisode[] = []
    

    const getNextEpisodes = async () => {
        // get all next episodes from followed shows
        followedShow.forEach( async function (value){

            const show: DetailedShow = await getShowDetailsById(value);
            setDetailedShows([...detailedShows, show])
            if(show.next_episode_to_air != null)
            {
                const nextEpisode: NextEpisode = show.next_episode_to_air;
                nextEpisodeRecovered.push(nextEpisode)
            }
        });
  
        // Assign final results
        setNextEpisodes(nextEpisodeRecovered)
    }

            // filtering result only for this week episodes
            const filterEpisodes =  () => {
                let result
                onAirShow.map((show) => {
                     result = nextEpisodeRecovered.filter(({show_id}) => show_id === show.id)
                });
                return result
            }

    // On-mount component effect
    useEffect(()=> {
        getNextEpisodes()
        getOnAirShows()
    }, [])

    // On-mount component effect
    useEffect(() => {
        filterEpisodes()
    }, [nextEpisodes])

    return (
    <div className="show-calendar">
        <h1>Episode to come !</h1>


        <div>
            {nextEpisodes.map((nextEpisode) => <NextEpisodeCard id={nextEpisode.id} show_id={nextEpisode.show_id} name={nextEpisode.name} season_number={nextEpisode.season_number} air_date={nextEpisode.air_date}/> )}
        </div>



    </div>
    );
}

export default ShowCalendar;



