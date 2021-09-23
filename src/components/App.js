import React from 'react';
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "../API/requests";
import './App.css';

const  App=()=> {
  return (
    <div className="app">
      {/**NAV */}
      <Nav/>
      {/*BANNER*/}
      <Banner />

      <Row
      title="USIL ORIGINALS"
      id="NO"
      fetchUrl={requests.fetchUsilOriginals}
      isLargeRow
      />

    </div>
  );
}

export default App;
