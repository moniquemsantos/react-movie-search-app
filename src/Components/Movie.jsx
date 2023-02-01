import React from "react";
import { Link } from "react-router-dom";

const Movie = ({movie}) => {
  return (
    <div>
      <Link to={`movie/${movie.id}`}>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.path} />
      </Link>
    </div>
  );
};
export default Movie;