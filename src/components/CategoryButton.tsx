import React, { useEffect, useState } from 'react';
import Show from '../models/show.model';
import './categoryButton.css'

function CategoryButton(props : any) {

  const handleCategoryButton = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=2b442b2506a3b0c6eac43c9bc95810b3&sort_by=popularity.desc&with_genres=${props.categoryId}`)
        const jsonRespond = await response.json()
        const result = jsonRespond.results
        console.log(result)

        const searchShows = result.map(( show:any ) => (
            {
                id: show.id,
                name: show.name, 
                poster: show.poster_path,
                description: show.overview,
                note: show.vote_average
            } as Show))

        props.setSerieList(searchShows)
        //props.setTotalShowNumber(jsonRespond.total_pages)
  }
  
  return (
    <div className="category-button">
        <button onClick={handleCategoryButton}>{props.categoryName}</button>
    </div>
  );
}

export default CategoryButton;
