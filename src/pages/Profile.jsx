// import React from 'react'
// import { Link } from 'react-router-dom'

// function Profile() {
//   return (
//     <div>
        
//         <Link to="/serie">Serie</Link>
//     </div>
//   )
// }

// export default Profile

import Menus from "../components/Menus";

function Profile() {
  return (
    <div className="w-full">
      <Menus />
      La page profil
    </div>
  );
}

export default Profile;
