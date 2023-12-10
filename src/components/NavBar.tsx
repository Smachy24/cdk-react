import React, { useEffect, useState } from 'react';
import './navBar.css'

function NavBar() {
  return (
    <header className="flex justify-between items-center bg-neutral-950 text-white p-5">
      <div className="logo text-2xl font-bold text-red-800"> <a href="/">Netflix</a></div>
      <nav>
        <ul className="flex">
          <li className="mr-5 cursor-pointer text-xl" ><a href="/">Home</a></li>
          <li className="mr-5 cursor-pointer text-xl"><a href="/hub">Shows</a></li>
          <li className="mr-5 cursor-pointer text-xl"><a href="/profile">Profile</a></li>
          <li className="mr-5 cursor-pointer text-xl"><a href="/calendar">Calendar</a></li>
          <li className="mr-5 cursor-pointer text-xl"><a href="/mockups">mockups</a></li>
          <li className="cursor-pointer text-xl"><a href="/logout">Déconnexion</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
