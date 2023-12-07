import React from 'react';
import '../styles/App.css';

function Inscription() {
  return (
    
    <div className="body font-sans m-0 p-0 bg-neutral-950 text-white flex items-center justify-center h-screen">

      <div className="container w-full max-w-md text-center">
        <div className="signup-box bg-opacity-80 bg-black p-10 rounded-lg">
          <div className="logo w-full max-w-2xl mb-4 text-4xl font-bold text-red-500 mx-auto">Netflix</div>
          <form className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-1">Nom :</label>
            <input type="text" id="name" name="name" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" />

            <label htmlFor="prenom" className="text-sm mb-1">Prenom :</label>
            <input type="text" id="prenom" name="prenom" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" />


            <label htmlFor="date" className="text-sm mb-1">Date de naissance :</label>
            <input type="text" id="date" name="date" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" />

            <label htmlFor="email" className="text-sm mb-1">Adresse Email :</label>
            <input type="email" id="email" name="email" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" />

            <label htmlFor="password" className="text-sm mb-1">Mot de passe :</label>
            <input type="password" id="password" name="password" required className="p-2 mb-4 border text-black border-gray-700 rounded-md" />

            <button type="submit" className="bg-red-500 text-white p-3 border-none rounded-md cursor-pointer">S'inscrire</button>
          </form>
          <p className="signin-link mt-4 text-sm">Avez-vous déjà un compte? Connecter vous ici </p>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
