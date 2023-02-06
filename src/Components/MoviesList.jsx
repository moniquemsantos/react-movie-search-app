import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import { MoviesContext } from "../store/MoviesContext.jsx";

function MoviesList(){
    
const {movies, fetchMovies} = useContext(MoviesContext)

 useEffect(() => {
  fetchMovies()   
  }, []);
     return(
        <div className="App">
        <h1 className="title">Popular now</h1>
        <div className="movies-container">
          {movies && movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    
     )
    
   
};


export default MoviesList;
