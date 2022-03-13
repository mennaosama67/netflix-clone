import React from 'react'
import {useDispatch} from "react-redux";
import {showTrailer} from '../redux/features/moviesSlice'
import './PlayButton.css'
function PlayButton() {
    const dispatch= useDispatch();
const HandleVideo=()=>{
  dispatch(showTrailer(true));
  setTimeout(()=>{
    dispatch(showTrailer(false));
    
  },5000)
  }

  return (
    <button className="play__button" onClick={HandleVideo} ><i className="fa-solid fa-play"></i> Play</button>
  )
}

export default PlayButton