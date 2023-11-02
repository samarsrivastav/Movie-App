import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading';
import MovieDetails from './components/MovieDetails';
import Corousel from './components/corousel';
import Navbar from './components/navbar';

function App() {
  const [movies, setMovie] = useState([]);
  const [currmovie, setCurrmovie] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const [searchItem, setSearchItem] = useState('');
  const getMovieRequest = async (searchItem) => {
    const url = `http://www.omdbapi.com/?apikey=fb61367e&s=${searchItem}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovie(responseJson.Search);
    }
  }
  useEffect(() => {
    getMovieRequest(searchItem);

  }, [searchItem])
  const addfavouriteMovie = (movie) => {
    const newFavouriteList = [...favourite, movie];
    setFavourite(newFavouriteList);
  }
  const removefavouriteMovie = (movie) => {
    const newFavouriteList = favourite.filter(
      (favourite) => favourite.imdbID != movie.imdbID
    );
    setFavourite(newFavouriteList);
  }
  const handledetail = (movie) => {
    setCurrmovie(movie);
    document.getElementById("details").style.display = "block";
  }
  const closemodal = () => {
    document.getElementById("details").style.display = "none";
  }
  return (
    <>
        <div id="details">
          <MovieDetails movies={currmovie} closemodal={closemodal} />
        </div>
        <Navbar searchItem={searchItem} setSearchItem={setSearchItem} heading="GetFlix" />
      <div className="container-fluid">
        <Corousel />
       
        
        <MovieListHeading heading="Search Result:"/>
        <div className="row moviediv">
          <MovieList movies={movies} handleFavouriteClick={addfavouriteMovie} handleDetail={handledetail} />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row header">
          <MovieListHeading heading="Favourites" />
        </div>
        <div className="row moviediv" id="favourite">
          <MovieList movies={favourite} handleFavouriteClick={removefavouriteMovie} remove={true} handleDetail={handledetail} />
        </div>
      </div>
    </>
  )
}

export default App
