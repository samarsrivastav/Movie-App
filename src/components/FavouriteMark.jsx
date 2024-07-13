
import { React, useState } from 'react'

function FavouriteMark(props) {

    return (
        <>
            <div className="container details" >
                <div className="main row" >
                    <div className="text-item col-md-6 text-right">
                        <h2>ADDED To Favorite</h2>
                    </div>
                    <button className="btn btn-danger col-md-2 close-btn" onClick={() => props.closemodal()}>Close</button>
                </div>
            </div>
        </>
    )
}

export default FavouriteMark