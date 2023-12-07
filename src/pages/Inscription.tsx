import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { db, auth } from '../utils/db';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { addDoc, collection } from "firebase/firestore"; 

import User from '../models/user.model';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

function Inscription() {

  const initialUserState: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: new Date(),
    createdAt: new Date(),
    followedShows: []
  }

  const [user, setUser] = useState<User>(initialUserState);
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(false)

  const navigate = useNavigate();


  useEffect(() => {
    if (alert) {
      const timeoutId = setTimeout(() => {
        setAlert(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [alert]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({...prevUser,[name]: value,}));
  };

  const isFormValid = () => {
    return (user.firstName.trim() !== "" &&user.lastName.trim() !== "" && user.email.trim() !== "" && user.password.trim() !== "" && user.dateOfBirth !== null
    );
  };


  const signUp = async () => {
    try {

      if (!isFormValid()) {
        setMessage("Veuillez remplir tous les champs du formulaire");
        setAlert(false);
        return;
      }

      const hashedPassword = await bcrypt.hash(user.password, 10);
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      await addDoc(collection(db, "Users"), {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password :hashedPassword,
        dateOfBirth: user.dateOfBirth,
        createdAt: user.createdAt,
        followedShows: user.followedShows
      });
      setMessage("User registered successfully!");
      setAlert(true);
      navigate('/');
    } catch (err: any) {

      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
      else{
        setMessage(`Une erreur est survenue ${err}`);
        setAlert(true);
      }
    } 
  };

  const handleFirebaseError = (err: FirebaseError) => {
    if(err.code === "auth/invalid-email"){
      setMessage("Adresse email invalide");
      setAlert(true);
    }

    else if (err.code === "auth/email-already-in-use") {
      setMessage("Cette adresse email existe déjà, veuillez en renseigner une autre");
      setAlert(true);
    } else if (err.code === "auth/weak-password") {
      setMessage("Le mot de passe est trop court, il doit comporter au mois 6 caractères");
      setAlert(true);
    } else {
      setMessage(`Firebase Error: ${err.message}`);
      setAlert(true);
      console.error(`Firebase Error: ${err.message}`);
    }
  };

  return (
    <div className="bg-gray-900 p-4">

      {alert && (
        <div className="fixed top-0 right-0 p-4 m-4 rounded text-red-800 bg-red-200 w-400">
          <i className="fa fa-times-circle"></i>
          <span> {message}</span>
        </div>
      )}



    
    <div className="body font-sans m-0 p-0 bg-gray-900 text-white flex items-center justify-center h-screen">
      
    
      
      <div className="container w-full max-w-md text-center">
        <div className="signup-box bg-opacity-80 bg-black p-10 rounded-lg">
          <div className="logo w-full max-w-2xl mb-4 text-4xl font-bold text-red-500 mx-auto">Netflix</div>
          <form className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-1">Nom :</label>
            <input type="text" id="lastName" name="lastName" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" value={user.lastName} onChange={handleInputChange}/>

            <label htmlFor="prenom" className="text-sm mb-1">Prenom :</label>
            <input type="text" id="firstName" name="firstName" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" value={user.firstName} onChange={handleInputChange}/>


            <label htmlFor="date" className="text-sm mb-1">Date de naissance :</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" value={user.dateOfBirth.toISOString().split('T')[0]} onChange={handleInputChange}/>

            <label htmlFor="email" className="text-sm mb-1">Adresse Email :</label>
            <input type="email" id="email" name="email" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" value={user.email} onChange={handleInputChange}/>

            <label htmlFor="password" className="text-sm mb-1">Mot de passe :</label>
            <input type="password" id="password" name="password" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" value={user.password} onChange={handleInputChange}/>

            <button type="button" className="bg-red-500 text-white p-3 border-none rounded-md cursor-pointer" onClick={signUp}>S'inscrire</button>
          </form>
          <p className="signin-link mt-4 text-sm">Avez-vous déjà un compte? Connecter vous ici </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Inscription;
