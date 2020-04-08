import React, { Component } from 'react'



export default class FilmRow extends Component {


    render() {

        return (

    <div className="film-row">
        <img src={"https://image.tmdb.org/t/p/w780/"+this.props.img} />

       <div className="film-summary">
          <h1>{this.props.title}</h1>
          <p> {this.props.year} </p>
       </div>
      
    </div>   
    
 
     )
    }
}