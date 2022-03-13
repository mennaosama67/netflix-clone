import React, { useState } from "react";
import Nav from "../components/Nav";
import Poster from "../components/Poster";
import "./SearchPage.css";
import { API_KEY } from "../axios/requests";
import { useEffect } from "react";
import axios from "../axios/axios";
import { SwiperSlide } from "swiper/react";
import {useSelector} from "react-redux";
function SearchPage() {
  const [searchMovie, setSearchMovie] = useState([]);
  const query=useSelector((state) => state.movie.searchQuery)

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  useEffect(() => {
    async function search() {
      const response = await axios.get(url);
      setSearchMovie(response.data.results);
    }
    search();
  }, [url]);

  const resultMovies = searchMovie.map((movie) => {
    return (
      <SwiperSlide className="result__movie">
        <Poster movie={movie} isLargeRow="false" />
      </SwiperSlide>
    );
  });
  return (
    <div className="search__screen">
      <Nav />
      <div className="result__container">
        <h4>Search results for: {query}</h4>
        <div className="row result">{resultMovies}</div>
      </div>
    </div>
  );
}

export default SearchPage;
