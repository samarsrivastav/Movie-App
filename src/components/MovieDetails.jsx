import { React, useState } from 'react'

function MovieDetails(props) {

    return (
        <>
            <div className="container details" >
                <div className="main row">
                    <img className="detail-img" src={props.movies.Poster} alt="movie" onClick={() => props.handleDetail(movie)} ></img>
                    <div className="text-item col-md-6">
                        <h2>Name: {props.movies.Title} </h2>
                        <p>Imdb Id: {props.movies.imdbID} </p>
                        <p>Type: {props.movies.Type} </p>
                        <p>Release Year: {props.movies.Year} </p>
                    </div>
                    <button className="btn btn-danger col-md-2 close-btn" onClick={() => props.closemodal()}>Close</button>
                </div>
            </div>
        </>
    )
}

export default MovieDetails