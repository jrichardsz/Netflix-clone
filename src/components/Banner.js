import React,{useState,useEffect} from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import axios from "../API/axios";
import requests from "../API/requests";
import "./Banner.css";

const Banner= ()=> {
    const [movie,setMovie] = useState([]);

    const truncate = (str, n)=> {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchUsilOriginals)
            //Give to our movie hook one of all the movies randomly
            var randomIndex = randomInteger(0,request.data.results.length-1);
            setMovie(request.data.results[randomIndex]);
            return request;
        }
        fetchData();

    },[]);

    return (
        <header className="banner"
            style={{
                backgroundImage : `url(
                    "${movie?.backdrop_path}"
                    )`,
                backgroundPosition : "top center",
                backgroundSize: "cover",
            }}
        >
            <div className="banner__contents">
                {/**Tittle */}
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button play"><PlayArrowIcon />Play</button>
                    <button className="banner__button info"><InfoOutlinedIcon fontSize="small"  paddingright={20} marginright={100}/><div className="space"></div> More Information</button>

                </div>
                {/**DIV > 2 BUTTONS */}

                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
                {/*Description*/}
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
