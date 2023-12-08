import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useNavigate } from 'react-router';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '../utils/db';
import User from "../models/user.model";
import FavoriteCard from './FavoriteCard';


function ShowsFollowed() {

  const navigate = useNavigate()
  const auth = getAuth()

  const [userInfos, setUserInfos] = useState<User | null>(null);
  const [userId, setUserId] = useState("");
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

    const followedShows = userInfos?.followedShows


  return (
    <div className="favorites flex flex-wrap justify-around p-4">
      {followedShows &&
       <ul>
        {followedShows.map((show, index) => (
          <FavoriteCard image={show.poster} title={show.name} userId={userId} show={show}/>
        ))}
     </ul>
      }
    </div>
    );



}

export default ShowsFollowed;