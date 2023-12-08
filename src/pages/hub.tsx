import React, { useCallback, useEffect, useState } from 'react';
import "../styles/hub.css"
import ShowCard from '../components/ShowCard';
import Show from '../models/show.model'
import SearchBar  from '../components/SearchBar';
import Pagination from '../components/Pagination';
import CategoryButton from '../components/CategoryButton';
import {getShows} from '../utils/request';


function Hub() {

    const [serieList, setSerieList] = useState<Show[]>([])

    const getData = async () => {
        const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=2b442b2506a3b0c6eac43c9bc95810b3")
        const jsonRespond = await response.json()
        const result = jsonRespond.results
        // const componentList = result.map(( show:any ) => ({name: show.Title, poster: show.Poster} as Show))
        console.log(result)
        const componentList = result.map(( show:any ) => (
            {
                id: show.id,
                name: show.name, 
                poster: show.poster_path,
                description: show.overview,
                note: show.vote_average
            } as Show))
        // setSerieList(jsonRespond.results)
        //console.log(componentList)
        setSerieList(componentList)
     }
     
     const getShowData = async () => {
        const shows = await getShows()
        console.log(shows)
        setSerieList(shows)
     }


      useEffect(()=> {
          getShowData()
            //const toto = getData()
          //console.log(toto)
      }, [])


    //   SEARCH BAR SPECIFIC
    const [searchTerm, setSearchTerm] = useState<string>('')
    //

    // pagination specific
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalShowNumber, setTotalShowNumber] = useState<number>(0)
    //



      //seach function
    const handleSearchSubmit = async (e : any) => {
        e.preventDefault();
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=2b442b2506a3b0c6eac43c9bc95810b3&query=${searchTerm}`)
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
        setSerieList(searchShows)

        setTotalShowNumber(jsonRespond.total_pages)
        console.log("total number of page is " + jsonRespond.totalShowResult)
        console.log("total number of pages is " + jsonRespond.total_pages)
        console.log("total number of result is " + jsonRespond.total_results)


     }
     console.log("En dehors total: " + totalShowNumber)
     

     const handleSearchChange = (e : any) => {
        setSearchTerm(e.target.value)
     }



     //pagination specific
     const nextPage = async (pageNumber: number) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=2b442b2506a3b0c6eac43c9bc95810b3&query=${searchTerm}&page=${pageNumber}`)
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
        setSerieList(searchShows)
        setCurrentPage(pageNumber)

     } 


     //category specific
     

    return (
        <div className="hub">
            <h1 className="hub-title">hello Hub</h1>

            <SearchBar handleSearchSubmit = {handleSearchSubmit} handleSearchChange={handleSearchChange}/>
            <div className='hub-category-buttons'>
                <CategoryButton categoryId={35} categoryName="Comedy" setSerieList={setSerieList} setTotalShowNumber={setTotalShowNumber} pageNumber={currentPage}/>
                <CategoryButton categoryId={16} categoryName="animation" setSerieList={setSerieList} setTotalShowNumber={setTotalShowNumber} pageNumber={currentPage}/>
                <CategoryButton categoryId={10762} categoryName="Kids" setSerieList={setSerieList} setTotalShowNumber={setTotalShowNumber} pageNumber={currentPage}/>
                <CategoryButton categoryId={10765} categoryName="Sci-Fi & Fantasy" setSerieList={setSerieList} setTotalShowNumber={setTotalShowNumber} pageNumber={currentPage}/>
                <CategoryButton categoryId={37} categoryName="Western" setSerieList={setSerieList} setTotalShowNumber={setTotalShowNumber} pageNumber={currentPage}/>
            </div>

            <ul className='hub-shows'>
                {serieList.map((show)=> <ShowCard id={show.id} name={show.name} poster={show.poster} description={show.description} note={show.note}/>)}
            </ul>

            {totalShowNumber > 1 ? <Pagination pages={totalShowNumber} nextPage={nextPage} currentPage={currentPage}/> : '' }


            {/* <ul>
                {serieList.map((show)=> <NewShowCard name={show.name} poster={show.poster}/>)}
            </ul> */}
       

        </div>
    );
}

export default Hub;