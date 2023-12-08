import React from 'react';
import '../styles/App.css';
import series1 from "../assets/series1.jpg"

function Profile() {
  return (
         <div className="bg-black min-h-screen text-white">
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
          <h2 className="h2Profile text-3xl mb-3 text-red-500">Profil </h2>

          <div className="flex justify-between gap-16">
            <div className="espace1 flex flex-col">
              <div className="inputProfile mt-3">
                <label htmlFor="name">Nom d'utilisateur :</label>
                <input className="inputInfos w-full px-4 py-2 rounded border mt-2" type="text" id="Nom " name="Nom " required />
              </div>

              <div className="inputProfile mt-3">
                <label htmlFor="name">Email :</label>
                <input className="inputInfos w-full px-4 py-2 rounded border mt-2" type="text" id="Email" name="Email" required />
              </div>

              <div className="inputProfile mt-3">
                <label htmlFor="name">Mot de passe :</label>
                <input className="inputInfos w-full px-4 py-2 rounded border mt-2" type="text" id="password" name="password" required />
              </div>
            </div>

            <div className="espace2 flex flex-col">
              <div className="inputProfile mt-3">
                <label htmlFor="name">Date d'inscription :</label>
                <input className="inputInfos w-full px-4 py-2 rounded border mt-2" type="text" id="inscription" name="inscription" required />
              </div>

              <div className="inputProfile mt-3">
                <label htmlFor="name">Date de naissance :</label>
                <input className="inputInfos w-full px-4 py-2 rounded border mt-2" type="text" id="naissance" name="naissance" required />
              </div>

              <div className="inputProfile mt-3">
                <label htmlFor="name">Langue:</label>
                <input className="inputInfos w-full px-4 py-2 rounded border mt-2" type="text" id="langue" name="langue" required />
              </div>
            </div>
          </div>

          <button className="w-1/2 self-center mt-5 bg-red-500 text-white px-8 py-2 text-xl rounded cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-red-500">
            Modifier le profil
          </button>
        </div>
      </section>
    </div>
  );
}


export default Profile;

