import React, { useEffect, useState } from "react";
import { API_KEY } from "../env";
import Movie from "../Components/Movie";
import Header from "../Components/Header";

function HomePage(){
    const API_URL =
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

 useEffect(() => {
   fetch(API_URL)
       .then((response) => response.json())
       .then((result) => {
       setMovies(result.results);
     });
  }, []);
     return(
        <>
        <Header/>
        <div className="App">
        <h1>Popular now</h1>
        <div className="popular-movies">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
      </>
     )
    
   
};


export default HomePage;
