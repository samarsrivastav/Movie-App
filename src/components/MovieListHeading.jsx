import { React, useState } from 'react'

function MovieListHeading(props) {
  return (
   <>
    <div className="text-center" >
      <h1 className="heading">{props.heading}</h1>
    </div>
   </>
  )
}

export default MovieListHeading
