import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { UserAuth } from "../store/AuthContext";
import { db } from "../config/firebaseConfig";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

const Movie = ({ movie, showLink = true }) => {
  const FavBtnStyle = { margin: "8px 0", backgroundColor: red[500] };
  const [addFavorite, setAddFavorite] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setAddFavorite(!addFavorite);
      setSaved(true);
      await updateDoc(movieId, {
        savedMovies: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <>
      <div className="movie-card">
        <Link to={`movie/${movie.id}`}>
          <img
            className="image-hover"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.path}
          />
        </Link>
        <h2 className="movie-title">{movie.title}</h2>
        <p className="average">
          <StarIcon  /> {movie.vote_average}
        </p>
        <div>
          <Button
            onClick={saveMovie}
            style={FavBtnStyle}
            variant="contained"
            fullWidth
          >
            Add to favorite
          </Button>
        </div>
      </div>
    </>
  );
};
export default Movie;
