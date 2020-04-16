import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends Component {

       state = {
            filter: "all",
            films: this.props.films,             
        }
    

    handleFilterClick(filter){
      
        this.setState({
            filter:filter
        })
        console.log("Setting filter to " + filter)

    }

    render() {


        let allFilms= this.props.films.map((film) => (
            <FilmRow key={film.id} 
            title={film.title} 
            onFaveToggle={() => this.props.onFaveToggle(film)}
            year={new Date(film.release_date).getFullYear()} 
            img={film.poster_path}
            handleDetailsClick={() => this.props.handleDetailsClick(film)}
            />

    ));

        let favFilm= this.props.faves.map((film) => (
            <FilmRow
            key={film.id} 
            title={film.title} 
            onFaveToggle={() => this.props.onFaveToggle(film)}
            year={new Date(film.release_date).getFullYear()} 
            img={film.poster_path}
            handleDetailsClick={() => this.props.handleDetailsClick(film)}
             />

        ));

    

        return (
<div className="film-list">
       <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
            ALL
            <span className="section-count">{this.props.films.length}</span>        </div>
        <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
        </div>
    </div>
     {this.state.filter == 'all'? allFilms : favFilm }
       
</div>       
     )
    }
}