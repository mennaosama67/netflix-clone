import React from 'react';
import Nav from '../components/Nav';
import './HomeScreen.css'
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../axios/requests';
function HomeScreen() {

  return <div className='homeScreen'>
       <Nav/>
       <Banner/>
       <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow="false"/>
       <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow="false"/>
       <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow="true"/>
       <Row title="Action Movies" fetchURL={requests.fetchActionMovies} isLargeRow="false"/>
       <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} isLargeRow="true"/>
       <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} isLargeRow="false"/>
       <Row title="Documentries" fetchURL={requests.fetchDocumentries} isLargeRow="false"/>
    
  </div>;
}

export default HomeScreen;
