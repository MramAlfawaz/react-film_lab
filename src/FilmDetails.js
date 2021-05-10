import React from "react";
import Subscriptions from "@material-ui/icons/Subscriptions";


export default function FilmDetails(props) {

  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`;
  // let details = props.film.id
  let details =  props.film.id ;
  if (details == null ) {
    return (
   <div className="film-details">
         <h1 className="section-title">DETAILS</h1>
          <div className="film-detail">
              <Subscriptions />
          <span>No film selected!</span>
        </div>
    </div> )} else {
      return (
        <div className="film-detail is-hydrated">
          <figure className="film-backdrop">
            <img src={backdropUrl} alt="" />
            <h1 className="film-title">{props.film.title}</h1>
          </figure>
          <div className="film-meta">
            <h2 className="film-tagline">{props.film.tagline}</h2>
            <p className="film-detail-overview">
              <img
                src={posterUrl}
                className="film-detail-poster"
                alt={props.film.title}
              />
              {props.film.overview}
            </p>
          </div>
        </div>)
        }
      
    
  
  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {details}
    </div>
  );
}