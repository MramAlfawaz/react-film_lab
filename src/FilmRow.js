import React, { Component } from 'react'
import Fave from './Fave'


export default class FilmRow extends Component {

    handleDetailsClick(film){

        console.log("Fetching details for " + this.props.title)

    }


    render() {

        return (

    <div onClick={() => this.handleDetailsClick()} className="film-row">
        <img src={"https://image.tmdb.org/t/p/w780/"+this.props.img} />

       <div className="film-summary">
          <h1>{this.props.title}</h1>
          <p> {this.props.year} </p>
       </div>
       
       <Fave />
      
    </div>   
    
 
     )
    }
}