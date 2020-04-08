import React, { Component } from 'react'
import FilmRow from './FilmRow'



export default class FilmListing extends Component {


    render() {

        let allFilms= this.props.allFilms.map(film => (
            <FilmRow key={film.id} title={film.title} 
            year={new Date(film.release_date).getFullYear()} img={film.poster_path} />

        ));

        return (
<div className="film-list">
       <h1 className="section-title">FILMS</h1>
       {allFilms}
    </div>       
     )
    }
}