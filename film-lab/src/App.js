import React from 'react';
import logo from './logo.svg';
import './App.css';

import TMDB from "./TMDB";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

function App() {

  
  return (

  <div className="film-library">

            <FilmListing allFilms={TMDB.films} />
            <FilmDetails allFilms={TMDB.films} />
    
  </div>  
          );
        
   }


export default App;
