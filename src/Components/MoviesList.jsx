import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import { MoviesContext } from "../store/MoviesContext.jsx";

function MoviesList(){
    
const {movies, fetchMovies} = useContext(MoviesContext)
console.log('movies :>> ', movies);

 useEffect(() => {
  fetchMovies()
   
  }, []);
     return(
        <div className="App">
        <h1>Popular now</h1>
        <div className="popular-movies">
          {movies && movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    
     )
    
   
};


export default MoviesList;