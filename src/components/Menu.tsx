// // Header.js
// import React from 'react';
// import SearchBar from './SearchBar';

// function Menu  (props: { onSearch: (searchTerm: string) => void; }) {
//   return (
//     <header className="flex justify-between items-center bg-neutral-950 text-white p-5">
//       <div className="logo text-2xl font-bold text-red-800">Netflix</div>
//       <nav>
//         <ul className="flex">
//           <SearchBar onSearch={props.onSearch} />
//           <li className="mr-5 cursor-pointer text-xl">Accueil</li>
//           <li className="mr-5 cursor-pointer text-xl">Séries</li>
//           <li className="mr-5 cursor-pointer text-xl">Profil</li>
//           <li className="cursor-pointer text-xl">Déconnexion</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Menu;


// Header.js
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
          <li className="cursor-pointer text-xl"><a href="/">Déconnexion</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
