import Show from '../models/show.model'

export const getShows = async () => {
    const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=2b442b2506a3b0c6eac43c9bc95810b3")
    const resonseJson = await response.json()

    const showsJson = resonseJson.results
    const shows = showsJson.map(( show:any ) => (
        {
            id: show.id,
            name: show.name, 
            poster: show.poster_path,
            description: show.overview,
            note: show.vote_average
        } as Show))

    return shows
 }

 export const getShowsJson = async () => {
    const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=2b442b2506a3b0c6eac43c9bc95810b3")
    const resonseJson = await response.json()

    const showsJson = resonseJson.results

    return showsJson
 }