import React from 'react';
import '../styles/App.css';

function Connexion() {
  return (
    <div className="body font-sans m-0 p-0 bg-neutral-950 text-white flex items-center justify-center h-screen">
      

      <div className="container w-full max-w-md text-center">
        <div className="login-box bg-opacity-80 bg-black p-10 rounded-lg">
          <div className="logo w-full max-w-2xl mb-4 text-4xl font-bold text-red-500 mx-auto">Netflix</div>
          <form className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">Adresse Email:</label>
            <input type="email" id="email" name="email" required className="p-2 mb-4 border border-gray-700 rounded-md" />

            <label htmlFor="password" className="text-sm mb-1">Mot de passe:</label>
            <input type="password" id="password" name="password" required className="p-2 mb-4 border border-gray-700 rounded-md" />

            <button type="submit" className="bg-red-500 text-white p-3 border-none rounded-md cursor-pointer">Se connecter</button>
          </form>
          <p className="signup-link mt-4 text-sm">Nouveau sur Netflix ? S'inscrire maintenant.</p>
        </div>
      </div>
    </div>
  );
}

export default Connexion;