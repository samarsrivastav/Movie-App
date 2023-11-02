import { React, useState } from 'react'

function MovieListHeading(props) {
  
  return (
   <>
   <div className="col-md-6">
    <h1 className="heading">{props.heading}</h1>
   </div>
   </>
  )
}

export default MovieListHeading
