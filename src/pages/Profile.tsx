import { useNavigate } from "react-router";
import Menus from "../components/Menus";

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../utils/db";

import User from "../models/user.model";
import { useEffect, useState } from "react";

function Profile() {

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

  return (
    <div className="w-full">
      <Menus />
      La page profil
      {userInfos && (
        <div>
          <p>Prenom: {userInfos.firstName} </p>
          <p>Nom : {userInfos.lastName}</p>
          <p>Email : {userInfos.email}</p>
          <p>Date de naissance : {userInfos.dateOfBirth.toString()}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
