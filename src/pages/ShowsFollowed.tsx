import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useNavigate } from 'react-router';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '../utils/db';
import User from "../models/user.model";


function ShowsFollowed() {

  const navigate = useNavigate()
  const auth = getAuth()

  const [userInfos, setUserInfos] = useState<User | null>(null);

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

    const user = querySnapshot.docs[0].data() as User;
    return user;
    }

    const followedShows = userInfos?.followedShows

  return (
    <div className="">
      {followedShows &&
       <ul>
        {followedShows.map((show, index) => (
          <li key={index}>{show.name}</li>
        ))}
     </ul>
      }
      
    </div>
  );
}

export default ShowsFollowed;