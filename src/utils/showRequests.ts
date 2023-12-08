import Show from '../models/show.model'
import DetailedShow from '../models/detailedShow.model'

export const getShowDetailsById = async (id : number) => {
    
    //const response = await fetch(`https://api.themoviedb.org/3/discover/tv/${id}?api_key=2b442b2506a3b0c6eac43c9bc95810b3`)
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=2b442b2506a3b0c6eac43c9bc95810b3`)
    //const response = await fetch(`https://api.themoviedb.org/3/tv/549?api_key=2b442b2506a3b0c6eac43c9bc95810b3`)

    const resonseJson = await response.json()
    //// console.log(resonseJson)


    // Detailed show have the same field name as the ones defines in the api return type, so field matching is automatic.
    const show = resonseJson as DetailedShow
    return show
 }
