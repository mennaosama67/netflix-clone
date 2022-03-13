import React from "react";
import "./Search.css";
import {useDispatch,useSelector} from "react-redux";
import {search} from '../redux/features/moviesSlice'
import {useNavigate} from 'react-router-dom'
function Search() {
const dispatch = useDispatch();
const query=useSelector((state) => state.movie.searchQuery);
const navigate=useNavigate();
const handleSearch=(e)=>{
  dispatch(search(e.target.value));
  setTimeout(()=>{
    navigate('/search')
  },1000)

 
}

  return (
    <div className="search__container">
      <input
        type="text"
        className="search-click"
        name="q"
        placeholder="search here..."
        value={query}
        onChange={handleSearch}
        onMouseOut={(e)=> e.target.value = ''}
      ></input>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default Search;
