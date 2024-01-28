import series1 from '../assets/series1.jpg';
import Menu from '../components/Menu';
import NavBar from '../components/NavBar';
import './mockups.css'
import { Link } from 'react-router-dom';

function Mockups() {
  return (
    <div className='mockups'>
        <NavBar/>
        <h1>SOME MOCKUPS FOR THE PROJECT</h1>
        <ul className='mockups-links'>
            <Link to={"/affichageSeries"}><li><a href="/affichageSeries">Shows</a></li></Link>
            <Link to={"/calendrier"}><li><a href="/calendrier">Calendar</a></li></Link>
            <Link to={"/detail"}><li><a href="/detail">Details</a></li></Link>
        </ul>

    </div>
  );
}

export default Mockups;
