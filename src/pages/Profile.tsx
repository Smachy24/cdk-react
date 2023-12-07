import { useNavigate } from "react-router";
import { FirebaseError } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut, updateEmail, updatePassword } from "@firebase/auth";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../utils/db";

import User from "../models/user.model";
import { useEffect, useState } from "react";

import '../styles/App.css';
import series1 from "../assets/series1.jpg"

function Profile() {

  const initialUserState: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: new Date(),
    createdAt: new Date(),
    followedShows: []
  }

  const navigate = useNavigate()
  const auth = getAuth()

  const [userInfos, setUserInfos] = useState<User>(initialUserState);
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfos((prevUser) => ({...prevUser,[name]: value,}));
  };

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

  useEffect(() => {
    if (alert) {
      const timeoutId = setTimeout(() => {
        setAlert(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [alert]);

  async function getUserInfos(email:string){

    const table = collection(db, "Users");
    const q = query(table, where("email", "==", email))
    const querySnapshot = await getDocs(q);

    const user = querySnapshot.docs[0].data() as User;
    
    return user;
  }

  async function updateUserInfos(){
    try{
      if(auth.currentUser){
        if(auth.currentUser.email !== userInfos.email){
          await updateUserEmail();
        }
        
        else{
          
          updateUserPassword()
        }

      }
      
    }catch(err){
      setMessage(`Une erreur est survenue ${err}`);
      setAlert(true);
    }
   
}

async function updateUserPassword(){
  try{
    if(auth.currentUser){
      await updatePassword(auth.currentUser, userInfos.password)
      await signOut(auth);
      navigate("/")
    }
  }
  catch(err){
    if (err instanceof FirebaseError) {
      handleFirebaseError(err);
    }
    else{
      setMessage(`Une erreur est survenue ${err}`);
      setAlert(true);
    }
  
}
}


  async function updateUserEmail(){
    try{
      if(auth.currentUser){
        await updateEmail(auth.currentUser, userInfos.email );
        await signOut(auth);
        navigate("/")
      }
    }
    catch(err){
      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
      else{
        setMessage(`Une erreur est survenue ${err}`);
        setAlert(true);
      }
    
  }
  }

  const handleFirebaseError = (err: FirebaseError) => {
    if(err.code === "auth/invalid-email"){
      setMessage("Adresse email invalide");
      setAlert(true);
    }

    else if (err.code === "auth/email-already-in-use") {
      setMessage("Cette adresse email existe déjà, veuillez en renseigner une autre");
      setAlert(true);
    }

    else if (err.code === "auth/weak-password") {
      setMessage("Le mot de passe est trop court, il doit comporter au mois 6 caractères");
      setAlert(true);
    }

    else{
      setMessage(`Une erreur est survenue ${err}`);
      setAlert(true);
    }
  }

  return (

    
    <div className="bg-black min-h-screen text-white">

        {alert && (
        <div className="fixed top-0 right-0 p-4 m-4 rounded text-red-800 bg-red-200 w-400">
          <i className="fa fa-times-circle"></i>
          <span> {message}</span>
        </div>
      )}  

    <header className="flex justify-between items-center bg-neutral-950 text-white p-5">

     <div className="logo text-2xl font-bold text-red-800">Netflix</div>
     <nav>
       <ul className="flex">
         <li className="mr-5 cursor-pointer text-xl">Accueil</li>
         <li className="mr-5 cursor-pointer text-xl">Séries</li>
         <li className="mr-5 cursor-pointer text-xl">Profil</li>
         <li className="cursor-pointer text-xl">Déconnexion</li>
       </ul>
     </nav>
     </header>

     <section className="profile flex justify-center items-center flex-col mt-10">
       <div className="avatar mb-5">
         <img src={series1} alt="Series 1" className="w-48 h-48 rounded-full" />
       </div>

       <div className="user-info text-center flex flex-col">
         <h2 className="h2Profile text-3xl mb-3 text-red-500">Profile </h2>

         <div className="flex justify-between gap-16">
          
           <div className="espace1 flex flex-col">
             <div className="inputProfile mt-3">
               <label htmlFor="name">Prénom :</label>
               <input className="inputInfos w-full px-4 py-2 rounded border mt-2 text-black"  type="text" id="firstName" name="firstName" value={userInfos.firstName} onChange={handleInputChange} required />
             </div>

      
             <div className="inputProfile mt-3">
               <label htmlFor="name">Email :</label>
               <input className="inputInfos w-full px-4 py-2 rounded border mt-2 text-black" type="email" id="email" name="email" value={userInfos.email} onChange={handleInputChange} required />
             </div>

             <div className="inputProfile mt-3">
               <label htmlFor="name">Mot de passe :</label>
               <input className="inputInfos w-full px-4 py-2 rounded border mt-2 text-black" type="password" id="password" name="password" onChange={handleInputChange} required />
             </div>
           </div>

           <div className="espace2 flex flex-col">
             <div className="inputProfile mt-3">
               <label htmlFor="name">Nom de famille :</label>
               <input className="inputInfos w-full px-4 py-2 rounded border mt-2 text-black" type="text" id="lastName" name="lastName" value={userInfos?.lastName} onChange={handleInputChange} required />
             </div>
          
             <div className="inputProfile mt-3">
               <label htmlFor="name">Date de naissance :</label>
               <input className="inputInfos w-full px-4 py-2 rounded border mt-2 text-black" type="date" id="dateOfBirth" name="dateOfBirth" onChange={handleInputChange} />
             </div>
      

             <div className="inputProfile mt-3">
               <label htmlFor="name">Langue:</label>
               <input className="inputInfos w-full px-4 py-2 rounded border mt-2 text-black " type="text" id="language" name="language" onChange={handleInputChange} />
             </div>
           </div>
         </div>

         <button className="w-1/2 self-center mt-5 bg-red-500 text-white px-8 py-2 text-xl rounded cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-red-500"
         onClick={updateUserInfos}>
           Modifier le profil
         </button>
       </div>
     </section>
   </div>
 );
}

export default Profile;
