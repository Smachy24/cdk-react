import React, { useEffect, useState } from 'react';

function SearchBar(props : any) {
  return (
    <div className="search-bar">
       <div>
            <form action="" onSubmit={props.handleSearchSubmit}>
                <input placeholder="Search new shows..." type="text" onChange={props.handleSearchChange}/>
            </form>
       </div>
    </div>
  );
}

export default SearchBar;