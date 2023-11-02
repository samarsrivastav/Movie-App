import { React, useState } from 'react'
import MovieListHeading from './MovieListHeading'
import MovieDetails from './MovieDetails'

function MovieList(props) {
  return (
   <>
  
   {props.movies.map((movie,index)=>
     <div className='movie-details my-5' >
      <img src={movie.Poster} alt="movie" onClick={()=>props.handleDetail(movie)} ></img>
      <div className="d-flex overlay align-item-center justify-content-center" onClick={()=>props.handleFavouriteClick(movie)}>
        <p>{movie.Title} {props.remove && 'x' || !props.remove && '♥'}</p>
      </div>
     </div>
   )} 
   
   </>
  )
}

export default MovieList
