import React from 'react';
import { useNavigate } from 'react-router';

function Menu  () {
  const navigate = useNavigate()
  return (
    <header className="flex justify-between items-center bg-neutral-950 text-white p-5">
      <div className="logo text-2xl font-bold text-red-800">Netflix</div>
      <nav>
        <ul className="flex">
          <li className="mr-5 cursor-pointer text-xl" ><a href="/">Accueil</a></li>
          <li className="mr-5 cursor-pointer text-xl"><a href="/affichageSeries">Séries</a></li>
          <li className="mr-5 cursor-pointer text-xl"><a href="/profile">Profil</a></li>
          <li className="cursor-pointer text-xl"><a href="/logout">Déconnexion</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
