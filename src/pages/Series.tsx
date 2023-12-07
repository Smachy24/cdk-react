// import React from 'react'

// function Serie() {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Serie

import ListSeries from "../components/ListSeries";
import Menus from "../components/Menus";

function Series() {
  return (
    <div className="w-full">
      <Menus />
      La page des séries
      <main className="flex justify-center items-center flex-wrap">
        {/* <ListSeries /> */}
      </main>
    </div>
  );
}

export default Series;
