import React, { useEffect, useState } from 'react';
import { getShowDetailsById } from '../utils/showRequests';
import { useNavigate, useParams } from 'react-router-dom';
import ShowCard from '../components/ShowCard';
import Show from '../models/show.model'
import DetailedShow from '../models/detailedShow.model';
import './showDetails.css'
import SeasonCard from './SeasonCard'
import { Link } from 'react-router-dom';
import CompanieCard from './CompanieCard';
import ContainerNote from './ContainerNote';
import AddNote from './AddNote';
import { onAuthStateChanged } from '@firebase/auth';
import User from '../models/user.model';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { auth, db } from '../utils/db';
import NavBar from './NavBar';


function ShowDetails() {
    
    const {show_id} = useParams<string>()
    const [userId, setUserId] = useState("");
    
    const [userInfos, setUserInfos] = useState<User | null>(null);

    const [currentShow, setCurrentShow] = useState<DetailedShow>()

    const navigate = useNavigate();

    const getShowDetails = async () =>
    {
      const show = await getShowDetailsById(Number.parseInt(show_id ?? "42976")) as DetailedShow  // TODO GERER ERREUR DE ROUTE INCONNUE
      setCurrentShow(show)
    }

    // On mount
    useEffect(()=> {
      getShowDetails()
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/");
      } else {
        if (user.email) {
          const userInfo = await getUserInfos(user.email);
          setUserInfos(userInfo);
        }
      }
    });

    return () => unsubscribe(); // Cleanup on unmount or component re-render
  }, [auth, navigate]);

  async function getUserInfos(email:string){

      const table = collection(db, "Users");
      const q = query(table, where("email", "==", email))
      const querySnapshot = await getDocs(q);
      setUserId(querySnapshot.docs[0].id)
      const user = querySnapshot.docs[0].data() as User;
    return user;
    }


  return (
    <div className="show-details">
      <NavBar/>
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

                <div className="average">
                <ContainerNote showId={currentShow.id}/>
                </div>

                <div className="add-note">
                <AddNote showId={currentShow.id} userId={userId}/>
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



