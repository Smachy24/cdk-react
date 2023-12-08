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
// import { v4 as uuidv4 } from 'uuid';

function ShowCalendar() {
    //     const [currentShow, setCurrentShow] = useState<DetailedShow>()


    //     const getShowDetails = async () =>
    //     {
    //       const show = await getShowDetailsById(Number.parseInt(show_id ?? "42976")) as DetailedShow  // TODO GERER ERREUR DE ROUTE INCONNUE
    //       setCurrentShow(show)
    //     }

    //     // On mount
    //     useEffect(()=> {
    //       getShowDetails()
    //   }, [])



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

    const days = ["Monday", "Tuesday", "Wednasday", "Thursday", "Friday", "Saturday", "Sunday"]
    const nextEpisodeRecovered:NextEpisode[] = []
    
    // const getNextEpisodes =  (followedShowIds:number[]) => {
    //     followedShowIds.forEach( async function (value){
    //         //console.log("show id : " + value)

    //         const show: DetailedShow = await getShowDetailsById(value);
    //         setDetailedShows([...detailedShows, show])
    //         //console.log("details show" +detailedShows)
    //         if(show.next_episode_to_air != null)
    //         {
    //             const nextEpisode: NextEpisode = show.next_episode_to_air;
    //             console.log("next episode found : " + nextEpisode.name)
    //             const nextEpisodeDate = new Date(nextEpisode.air_date)
    //             const nextEpisodeDay = nextEpisodeDate.getDay();
    //             //console.log(days[nextEpisodeDay])
    //             //console.log("nextEpisodes :" + nextEpisodes)
    //             //console.log("nextEpisodesRecovered :" + nextEpisodeRecovered)

    //             //console.log("date : " + nextEpisodeDate)

    //             //if(!nextEpisodeRecovered.includes(nextEpisode))
    //             //{
    //                 nextEpisodeRecovered.push(nextEpisode)
    //             //}

    //             // if(nextEpisode.id == onAirShow.includes() )
                
                
    //             // if (onAirShow.filter(e => e.id === nextEpisode.id).length > 0) {
    //             //     /* vendors contains the element we're looking for */
    //             //     nextEpisodeRecovered.push(nextEpisode)
    //             // }

              
    //         }

    //     });
    // //    const temp = nextEpisodeRecovered.filter(({id},index) => !followedShow.includes(id,index+1))
    // //     console.log("temporary" + temp)

  

    //     // const filtered: NextEpisode[] = []
    //     // nextEpisodeRecovered.forEach( async function (episode){ 
    //     //     console.log("filteredepisode id" + episode.id)
    //     //     const rigolo = onAirShow.find(e => e.id === episode.id)
    //     //     console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////", rigolo);
            
    //     //     //   if (onAirShow.find(e => e.id === episode.id)) {
    //     //     //         console.log(e)
    //     //     //         /* vendors contains the element we're looking for */
    //     //     //         nextEpisodeRecovered.push(episode)
    //     //     //     }
    //     //   });
    //     // console.log("filtered" + filtered)


    // //     let filtered: any = []
    // //     // filtered = nextEpisodeRecovered.filter(({id}) => onAirShow[] id)
    // //   const arrayO =  nextEpisodeRecovered.map((episode) => {
           
    // //         // console.log(episode.show_id);
    // //         // console.log('===========');
            
    // //          filtered = onAirShow.filter(({id}) => id === episode.show_id)
    // //     });
    // //     console.log(arrayO);
        
        


    //     nextEpisodeRecovered.sort(function(a,b){
    //         // Turn your strings into dates, and then subtract them
    //         // to get a value that is either negative, positive, or zero.
         
            
    //         return Number(new Date(b.air_date)) - Number(new Date(a.air_date));
    //       });
    //    // nextEpisodeRecovered = nextEpisodeRecovered.sort()
    //     setNextEpisodes(nextEpisodeRecovered)
    // }


    const getNextEpisodes = async () => {
        // get all next episodes from followed shows
        followedShow.forEach( async function (value){
            //console.log("show id : " + value)

            const show: DetailedShow = await getShowDetailsById(value);
            setDetailedShows([...detailedShows, show])
            //console.log("details show" +detailedShows)
            if(show.next_episode_to_air != null)
            {
                const nextEpisode: NextEpisode = show.next_episode_to_air;

                nextEpisodeRecovered.push(nextEpisode)
                
        }});
  

      
        

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

    useEffect(()=> {
        console.log("-----------------------------useEffect")
        getNextEpisodes()
        getOnAirShows()
    }, [])

    useEffect(() => {
        console.log('ghvjhkbnkbnlbnl');
        
        filterEpisodes()
    }, [nextEpisodes])


    // uuid not working
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }
   

    return (
    <div className="show-calendar">
        <h1>CALENDAR</h1>

        {/* if the description is empty, use placeholder text */}
        {/* {nextEpisodes.length == 0 ? 
                    <p>Aucun épisode pour cette semaine...</p>
                    : {{nextEpisodes.map((next) => <h1> {next.air_date.toDateString()} </h1> )}}

        } */}

        {/* <h2>{nextEpisodes.length}</h2>
        <h2>{nextEpisodeRecovered.length}</h2>

        <h2>{detailedShows.length}</h2>

        <ul>
            {nextEpisodes.map((next) => <li key={getRandomInt(555555)}> {next.name} {new Date(next.air_date).getDate()}  {new Date(next.air_date).getMonth()} {new Date(next.air_date).getFullYear()}</li> )}
        </ul>
        <ul>
            {nextEpisodeRecovered.map((next) => <li key={getRandomInt(555555)}> {next.name} </li> )}
        </ul> */}

        <div>
            {nextEpisodes.map((nextEpisode) => <NextEpisodeCard id={nextEpisode.id} show_id={nextEpisode.show_id} name={nextEpisode.name} season_number={nextEpisode.season_number} air_date={nextEpisode.air_date}/> )}
        </div>

        {/* {nextEpisodes.map((next) => <h1> {new Date(next.air_date).getDay()} </h1> )} */}


    </div>
    );
}

export default ShowCalendar;



