import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import SingleMovieDetails from "../Components/SingleMovieDetails";
import { MoviesContext } from "../store/MoviesContext";

const Details = () => {
  let { movieId } = useParams();

  const { movie, fetchMovieById } = useContext(MoviesContext);

  useEffect(() => {
    fetchMovieById(movieId);
  }, [movieId]);

  return (
    <div>
      <Header />
      <h2>Movie</h2>
      <SingleMovieDetails movie={movie} />
    </div>
  );
};

export default Details;
