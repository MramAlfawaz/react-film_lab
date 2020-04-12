import React, { Component } from 'react'
import './App.css';
import TMDB from "./TMDB";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

export default class App extends Component {

  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  }

  handleFaveToggle = (film) => {
console.log(film)
   var faves = this.state.faves.slice()

   const filmIndex = this.state.films.indexOf(film)

   if(faves.includes(film)){
     console.log(`removing ${film.title}`)
     faves.splice(film)
   } else {
     console.log(`adding ${film.title}`)
     faves.push(film)
   }
   this.setState({ faves });
  }

  handleDetailsClick = (film) => {
    this.setState({current:film})
  }

  render() {
 

  return (

  <div className="film-library">

            <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} />
            <FilmDetails film={this.state.current} />
    
  </div>  
          )
        
   }
  }
  

