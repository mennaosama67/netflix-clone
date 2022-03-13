import React, { Fragment } from "react";
import "./Row.css";
import './Poster.css'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import useGenreConversion from '../hooks/useGenreConversion'
import DetailsModal from "./DetailsModal";
import {fallbackImg} from '../axios/requests'
import {useDispatch} from "react-redux";
import {showTrailer} from '../redux/features/moviesSlice'
import {db} from '../firebase'
import { collection, addDoc, deleteDoc,doc } from "firebase/firestore";

const baseImageURL = "https://image.tmdb.org/t/p/original/";

function Poster({isLargeRow ,movie,showBtn}) {

  const genreNames=useGenreConversion(movie.genre_ids);


const [isOpen,setIsopen]=useState(false);

const showModal=()=>setIsopen(true);

const hideModal=()=> setIsopen(false);

const movieURL=`${baseImageURL}${
  isLargeRow === "true" ? movie.poster_path : movie.backdrop_path
}`
const movieName=movie.name || movie.title || movie.original_title|| movie.original_name;

const dispatch= useDispatch();

const HandleVideo=()=>{
  dispatch(showTrailer(true));
  setTimeout(()=>{
    dispatch(showTrailer(false));
    
  },5000)
  }

const addMovieHandler=()=>{
  createMovie(movie);
}
const deleteMovie= async (id) => {
  await deleteDoc(doc(db, 'movies', id))

}
const removeMovieHandler=()=>{
  deleteMovie(movie.id);
}

  return (
    <Fragment>
 <div className="poster__wrapper" onClick={showModal} >
    <img
    src={movieURL||fallbackImg}
    alt={movieName}
    key={movie.id}
    className={` ${isLargeRow==='true'?"row_large":''}`}
    
  />
  <div className="poster__overlay" ></div>
  <div  className={`poster__description ${isLargeRow==='true'?"poster__large":''}`}>
     <div className="poster__icons">
     <i className="fa-solid fa-play poster__icon" onClick={HandleVideo} ></i>
     <i className="fa-solid fa-plus poster__icon" onClick={addMovieHandler} style={{display:`${showBtn?'block':'none'}`}}></i>
     <i className="fa-solid fa-minus poster__icon" onClick={removeMovieHandler} style={{display:`${showBtn?'none':'block'}`}}></i>

     <i className="fa-solid fa-angle-down poster__icon" onClick={showModal} ></i>
     </div>
     <h6>{movie.name || movie.title || movie.original_title|| movie.original_name}</h6>
     <ul className="genres__names">
      {genreNames?.map((genre,index)=>{
        return <li key={index}>{genre}</li>
      })}
     </ul>
  </div>
  
  </div>
  <DetailsModal show={isOpen} onHide={hideModal}  movie={movie} imgBg={movieURL} genreNames={genreNames}/>
  </Fragment>
  )
}
export const createMovie= async (movie) => {
 await addDoc(collection(db, 'movies'), {
    backdrop_path: movie.backdrop_path,
    first_air_date: movie.first_air_date||'Not Available',
    genre_ids: movie.genre_ids,
    name:movie.name || movie.title || movie.original_title|| movie.original_name,
    original_language: movie.original_language,
    overview: movie.overview,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
 
  })
 
  
};

export default Poster