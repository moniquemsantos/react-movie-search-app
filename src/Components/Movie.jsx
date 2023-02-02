import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";

const Movie = ({ movie }) => {
  const FavBtnStyle = { margin: "8px 0", backgroundColor: red[500] };

  return (
    <>
      <div>
        <Link to={`movie/${movie.id}`}>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.path}
          />
        </Link>
        <div>
          <Button
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
