import React, { Component } from 'react'
import FilmRow from './FilmRow'



export default class FilmListing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            filter: "all"
             
        }
    }
    

    handleFilterClick(filter){

        this.setState({filter:filter})
        console.log("Setting filter to " + filter)

    }


    render() {

        let allFilms= this.props.allFilms.map(film => (
            <FilmRow key={film.id} title={film.title} 
            year={new Date(film.release_date).getFullYear()} img={film.poster_path} length={film.length}/>

        ));

        return (
<div className="film-list">
       <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
            ALL
            <span className="section-count">{this.props.allFilms.length}</span>
        </div>
        <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>
       {allFilms}
</div>       
     )
    }
}