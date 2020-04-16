import React from 'react'
import Fave from './Fave'


export default function FilmRow(props) {




        return (

    <div className="film-row" onClick={props.handleDetailsClick}>
        <img src={"https://image.tmdb.org/t/p/w780/"+props.img} />

       <div  className="film-summary">
          <h1>{props.title}</h1>
          <p> {new Date(`${props.year}`).getFullYear()} </p>

       </div>
       
       <Fave onFaveToggle={props.onFaveToggle} isFav={props.isFav} />
      
    </div>   
    
 
     )
    }