import React, { useEffect,useState } from "react";
import "./SearchPage.css";
import Nav from "../components/Nav";
import { SwiperSlide } from "swiper/react";
import Poster from "../components/Poster";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function MyList() {
 

  const [movie,setMovie]=useState([])


    useEffect(() => {
      const getMovies = async () => {
        const moviesSnapshot = await getDocs(collection(db, "movies"));
        setMovie(moviesSnapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data(),
        })))
      return moviesSnapshot
      
      };
    getMovies();
  
    });

const result=movie.map(m=>{
  return   <SwiperSlide className="result__movie" key={m.id}>
  <Poster movie={m} isLargeRow="false" showBtn='' />
</SwiperSlide>
})



  return (
    <div className="search__screen">
      <Nav />
      <div className="result__container">
        <h4>My List </h4>
        <div className="row result">
      {result}
        </div>
      </div>
    </div>
  );
}

export default MyList;
