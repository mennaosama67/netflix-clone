import React from 'react'
import Nav from '../components/Nav';
import './HomeScreen.css'
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../axios/requests'

function TvScreen() {
  return (
      <div className="tv__screen">
      <Nav/>
      <Banner/>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow="false"/>
      <Row title="Trending Now" fetchURL={requests.fetchTrendingSeries} isLargeRow="false"/>
      <Row title="Action & Adventure " fetchURL={requests.fetchActionAdventureSeries} isLargeRow="true"/>
      <Row title="Animation" fetchURL={requests.fetchAnimationSeries} isLargeRow="false"/>
      <Row title="Comedy" fetchURL={requests.fetchComedySeries} isLargeRow="true"/>
      <Row title="Crime" fetchURL={requests.fetchCrimeSeries} isLargeRow="false"/>
      <Row title="Documentries" fetchURL={requests.fetchDocumentarySeries} isLargeRow="false"/>
      <Row title="Family" fetchURL={requests.fetchFamilySeries} isLargeRow="false"/>
      <Row title="Kids" fetchURL={requests.fetchKidsSeries} isLargeRow="false"/>
      <Row title="Sci-Fi & Fantasy" fetchURL={requests.fetchSciFiFantasySeries} isLargeRow="false"/>


      </div>
  
  )
}

export default TvScreen