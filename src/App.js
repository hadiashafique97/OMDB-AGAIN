import {useState, useEffect} from "react"

import './App.css';
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form"
import RecommendedMovieDisplay from "./components/RecommendedMovieDisplay";


export default function App() {
  //variable with your apiKey
  const apiKey = "39615f";

  //State to hold movie data
  const [movie, setMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState(null)
  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch(e){
      console.error(e)
    }
  };

  const getRecommendedMovies = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=movie&page=1`
      );
      // Parse JSON response into a javascript object
      const data2 = await response.json();
      //set the Movie state to the movie
      setRecommendedMovies(data2);
    } catch(e){
      console.error(e)
    }
  };
//This will run on the first render but not on subsquent renders
useEffect(() => {
  getMovie("Clueless");
  
}, []);
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} recommendedmoviesearch={getRecommendedMovies} />
      <MovieDisplay movie={movie}/>
      <RecommendedMovieDisplay recommendedMovies={recommendedMovies}/>
      
    </div>
  );
}
