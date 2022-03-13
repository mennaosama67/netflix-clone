import "./DetailsModal.css";
import React from "react";
import {Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayButton from "./PlayButton";
import {fallbackImg} from '../axios/requests'

import {createMovie} from './Poster'
function DetailsModal({show,onHide,imgBg,movie,genreNames}) {
  const mystyle = {
    backgroundImage: `url(${imgBg||fallbackImg})` 
  };
 

  const movieName= movie.original_name || movie.original_title || movie.name|| 'Name Not available';

  const maturityRating = movie.adult === undefined ? "Not available" : movie.adult ? "Suitable for adults only" : "Suitable for all ages";
  let names='';
  if(genreNames){
    names= genreNames.map(((genre,index)=>{
    return <span key={index}> {genre} </span>
  }))
}else{
  return null;
}
const addMovieHandler=()=>{
  createMovie(movie);
 }
  return (
      <>
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onClick={onHide} style={mystyle} className='modal__header '>
       
        <div className="modal__btn" >
        <PlayButton/>
        <i className="fa-solid fa-plus" onClick={ addMovieHandler}></i>
         </div>
       
      </Modal.Header>
      
      <Modal.Body>
        <h4>{movieName}</h4>
        <p>
          {movie.overview}
        </p>
        <hr/>
        <h5>Info on {movieName}</h5>

        <p><span className="movie__info">Release date:</span> {movie.release_date?movie.release_date:"Not Available"}</p>
        <p><span className="movie__info">Average vote</span> {movie.vote_average} </p>
        <p><span className="movie__info">Genres:</span> {names}</p>
        <p><span className="movie__info">Original language:</span> {movie.original_language} </p>
        <p><span className="movie__info">Age classification:</span> {maturityRating} </p>
      </Modal.Body>
     
    </Modal>

    </>
  );
}

export default DetailsModal;
