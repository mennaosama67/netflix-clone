import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Poster from "./Poster";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      const response = request.data.results;
      setMovies(response);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="_row">
      <h4>{title}</h4>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper "
       
      >
        {movies.map((movie, index) => (
          <SwiperSlide className="swiper-slide" key={index}  >
            <Poster movie={movie} isLargeRow={isLargeRow} showBtn='true'/>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </div>
  );
}

export default Row;

/* const { movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(fetchURL));
  }, [dispatch, fetchURL]);
  console.log(movie, fetchURL);*/
