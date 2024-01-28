import React, { useEffect, useState } from 'react';
import './searchBar.css'

function SearchBar(props : any) {
  return (
    <div className="search-bar">
       <div>
            <form action="" onSubmit={props.handleSearchSubmit}>
                <input placeholder="Search new shows..." type="input" onChange={props.handleSearchChange}/>
            </form>
       </div>
    </div>
  );
}

export default SearchBar;