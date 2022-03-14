import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../axios/axios";
import requests from "../axios/requests";
import PlayButton from "./PlayButton";
import DetailsModal from "./DetailsModal";
import useGenreConversion from '../hooks/useGenreConversion'

function Banner() {
     
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
   const request=await axios.get(`${requests.fetchTrending}`);
   // to get random movie each time
   setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
  
    }
    fetchMovies();
  }, []);
  const genreNames=useGenreConversion(movie.genre_ids);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  const [isOpen,setIsopen]=useState(false);
  const movieURL=`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
const showModal=()=>setIsopen(true);

const hideModal=()=> setIsopen(false);
  return (
    <header className="banner" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
    <div className="fade--top"></div>
      <div className="banner__content">
        <h1 className="banner__title">{movie?.title||movie?.name||movie?.original_name}</h1>
        <div className="banner__buttons">
        <PlayButton/>
          <button className="info__button" onClick={showModal}><i className="fa-solid fa-circle-info"></i> More info</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            ` ${movie?.overview}`,
            150
          )}
        </h1>
      </div>
      <div className="fade--bottom"></div>
      <DetailsModal show={isOpen} onHide={hideModal}  movie={movie} imgBg={movieURL} genreNames={genreNames}/>

    </header>
  );
}

export default Banner;
