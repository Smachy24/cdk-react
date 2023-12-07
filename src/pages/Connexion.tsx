import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { auth } from '../utils/db';
import { FirebaseError } from 'firebase/app';
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { useNavigate } from 'react-router';



function Connexion() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const isFormValid = () => {
    return (email.trim() !== "" && password.trim() !== "" );
  };

  const login = async () => {
    try {

      if (!isFormValid()) {
        setMessage("Veuillez remplir tous les champs du formulaire");
        setAlert(false);
        return;
      }
      
      await setPersistence(auth, browserSessionPersistence);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      
      navigate("/");
     
    }
    catch (err: any) {
      if (err instanceof FirebaseError) {
        if(err.code === "auth/invalid-credential"){
          setMessage("L'adresse email et le mot de passe ne correspondent pas");
          setAlert(true);
        }
        else{
          setMessage(`Firebase Error: ${err.message}`);
        }
      } else {
        // Handle other errors
        setMessage(`Une erreur est survenue: ${err.message}`);
      }
      setAlert(true);
    }
    
  }

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
        <div className="login-box bg-opacity-80 bg-black p-10 rounded-lg">
          <div className="logo w-full max-w-2xl mb-4 text-4xl font-bold text-red-500 mx-auto">Netflix</div>
          <form className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">Adresse Email:</label>
            <input type="email" id="email" name="email" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" value={email} onChange={ (e) => setEmail(e.target.value) }/>

            <label htmlFor="password" className="text-sm mb-1">Mot de passe:</label>
            <input type="password" id="password" name="password" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" value={password} onChange={ (e) => setPassword(e.target.value) } />

            <button type="button" className="bg-red-500 text-white p-3 border-none rounded-md cursor-pointer" onClick={login}>Se connecter</button>
          </form>
          <p className="signup-link mt-4 text-sm">Nouveau sur Netflix ? S'inscrire maintenant.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Connexion;