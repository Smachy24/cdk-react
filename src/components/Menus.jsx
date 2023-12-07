// import { Link } from "react-router-dom";

// function Menus() {
//   return (
//     <ul className="flex gap-4 bg-slate-200 p-4 w-full">
//       <li>
//         <Link className="hover:underline" to="/">
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link className="hover:underline" to="/series">
//           Series
//         </Link>
//       </li>
//       <li>
//         <Link className="hover:underline" to="/profile">
//           Profile
//         </Link>
//       </li>
//     </ul>
//   );
// }

// export default Menus;



// Menus.js
import React from 'react';
import SearchBar from './SearchBar';

function Menus  ({ onSearch })  {
  return (
    <Menus className="flex justify-between items-center bg-neutral-950 text-white p-5">
      <div className="logo text-2xl font-bold text-red-800">Netflix</div>
      <nav>
        <ul className="flex">
          <SearchBar onSearch={onSearch} />
          <li className="mr-5 cursor-pointer text-xl">Accueil</li>
          <li className="mr-5 cursor-pointer text-xl">Séries</li>
          <li className="mr-5 cursor-pointer text-xl">Profil</li>
          <li className="cursor-pointer text-xl">Déconnexion</li>
        </ul>
      </nav>
    </Menus>
  );
};

export default Menus;
