import React from "react";

function SingleMovieDetails({ movie }) {
  return (
    <div>
      <p>Details Page</p>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.path}
      />
    </div>
  );
}

export default SingleMovieDetails;
