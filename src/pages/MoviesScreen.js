import React from 'react'
import Nav from '../components/Nav';
import './HomeScreen.css'
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../axios/requests'
function MoviesScreen() {
  return (
    <div className="movies__screen">
    <Nav/>
    <Banner/>
    <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow="false"/>
    <Row title="Trending Now" fetchURL={requests.fetchTrendingMovies} isLargeRow="false"/>
    <Row title="Action  " fetchURL={requests.fetchActionMovies} isLargeRow="true"/>
    <Row title="Animation" fetchURL={requests.fetchAnimationMovies} isLargeRow="false"/>
    <Row title="Comedy" fetchURL={requests.fetchComedyMovies} isLargeRow="true"/>
    <Row title="War" fetchURL={requests.fetchWarMovies} isLargeRow="false"/>
    <Row title="Documentries" fetchURL={requests.fetchDocumentries} isLargeRow="false"/>
    <Row title="Adventure" fetchURL={requests.fetchAdventureMovies} isLargeRow="false"/>
    <Row title="Romance" fetchURL={requests.fetchRomanceMovies} isLargeRow="false"/>
    <Row title="Horror" fetchURL={requests.fetchHorrorMovies} isLargeRow="false"/>
    <Row title="Upcoming" fetchURL={requests.fetchUpcomingMovies} isLargeRow="false"/>


    </div>
  )
}

export default MoviesScreen