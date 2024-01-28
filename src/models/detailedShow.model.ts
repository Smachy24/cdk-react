import Companie from "./companie.model";
import Season from "./season.model";
import NextEpisode from "./nextEpisode.model";

interface DetailedShow {  
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  number_of_seasons: number;
  vote_average: number;
  seasons: Season[];
  production_companies: Companie[];
  next_episode_to_air?: NextEpisode;
}

export default DetailedShow;