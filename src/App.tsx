import React, { useState } from 'react';
import './App.css';
import { db, auth } from './utils/db';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { addDoc, collection } from "firebase/firestore"; 

import User from './models/user.model';


function App() {

  const initialUserState: User = {
    firstName: "Prenom",
    lastName: "Nom",
    email: "b@gmail.com",
    password: "password",
    dateOfBirth: new Date(),
    createdAt: new Date()
  }

  const [user, setUser] = useState<User>(initialUserState);
  const [message, setMessage] = useState('');

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      await addDoc(collection(db, "Users"), {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        createdAt: new Date(),
      });
      setMessage("User registered successfully!");
    } catch (err: any) {
      if (err instanceof FirebaseError) {
        handleFirebaseError(err);
      }
      else{
        setMessage(`Une erreur est survenue ${err}`);
      }
    } 
  };

  const handleFirebaseError = (err: FirebaseError) => {
    if(err.code === "auth/invalid-email"){
      setMessage("Adresse email invalide");
    }

    else if (err.code === "auth/email-already-in-use") {
      setMessage("Cette adresse email existe déjà, veuillez en renseigner une autre");
    } else if (err.code === "auth/weak-password") {
      setMessage("Le mot de passe est trop court, il doit comporter au mois 6 caractères");
    } else {
      setMessage(`Firebase Error: ${err.message}`);
      console.error(`Firebase Error: ${err.message}`);
    }
  };

  return (
    <div className="App">

      <button onClick={signUp}>
        Sign Up
      </button>
      <p>{message}</p>
    </div>
  );
}

export default App;