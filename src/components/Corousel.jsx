import { React, useState } from 'react'

function Corousel(props) {

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide my-3 " data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?t=st=1720875735~exp=1720879335~hmac=c97f4ee3e5246f66a498fac389b5e0adc0d5037126ed245270fbc9b560f491bd&w=826" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://img.freepik.com/free-vector/home-movie-background-with-popcorn_1419-1852.jpg?t=st=1720875475~exp=1720879075~hmac=3e69342b911bef968d11bd207a65d39269ba26d99c31680edbd5b594992dd22e&w=826" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Corousel