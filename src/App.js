import React, { Component } from 'react'
import logo from "./logo.svg";
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
     faves.splice(film, 1)
   } else {
     console.log(`adding ${film.title}`)
     faves.push(film)
   }
   this.setState({ faves });
  }

  
  handleDetailsClick = (film) => {
    console.log(`Showing ${film.title} details...`)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=91437dd46760bd750f1d7d02b8b2f2b1&append_to_response=videos,images&language=en`
    fetch(url).then(response => {
      response.json().then(data => {
        console.log(data) // Take a look at what you get back!
        this.setState({current: data})
      })
    })
  };
  

  render() {
 

  return (

  <div className="film-library">
            <FilmListing 
            handleDetailsClick={this.handleDetailsClick}
              films={this.state.films} 
              faves={this.state.faves} 
              onFaveToggle={this.handleFaveToggle} />
              
            <FilmDetails film={this.state.current} />
  </div>  
          )
        
   }
  }
  

