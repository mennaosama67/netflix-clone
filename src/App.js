import React from "react";
import HomeScreen from "./pages/HomeScreen";
import "./App.css";
import LoginScreen from "./pages/LoginScreen";
import SigninScreen from "./pages/SigninScreen";
import { Routes, Route } from "react-router-dom";
import SignUpScreen from "./pages/SignUpScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/features/userSlice";
import TvScreen from "./pages/TvScreen";
import MoviesScreen from "./pages/MoviesScreen";
import PlayTrailer from "./components/PlayTrailer";
import SearchPage from "./pages/SearchPage";
import MyList from "./pages/MyList";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const video  = useSelector((state) => state.movie.showVideo);
const myStyle=useSelector((state) => state.movie.videoStyle)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
    <PlayTrailer showVideo={video} videoStyle={myStyle}/>
      <Routes>
      
          <Route path="/" element={<LoginScreen />} >
          <Route index path="signin" element={<SigninScreen />} />
          <Route path="signup" element={<SignUpScreen />} />
          </Route>
  
         
     
         <>
          <Route path="/home" element={<HomeScreen />}/>
          <Route path="/tv" element={<TvScreen/>}/>
          <Route path="/movies" element={<MoviesScreen/>}/>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/mylist" element={<MyList />}/>
          </>
       
      </Routes>
    </div>
  );
}

export default App;
