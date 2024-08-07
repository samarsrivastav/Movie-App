import { React, useState } from 'react'

function Navbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid navbar-cont" >
                    <img src="/vite.svg" alt="icon" className='icon' />
                    <a className="navbar-brand" href="#">{props.heading}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#movie">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#favourite">Favourites</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={props.searchItem} onChange={(e) => props.setSearchItem(e.target.value)} />
                        </form>
                        <a className="nav-link" href="#favourite"><button className='btn btn-dark'>Search</button></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar