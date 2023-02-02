/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Header from "../Components/Header";
import SingleMovieDetails from "../Components/SingleMovieDetails";
import { useNavigate, useParams } from "react-router-dom";
import { MoviesContext } from "../store/MoviesContext";
import { ArrowBack } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Details = () => {
  const navigate = useNavigate();
  let { movieId } = useParams();
  const { movie, fetchMovieById } = useContext(MoviesContext);
  useEffect(() => {
    fetchMovieById(movieId);
  }, [movieId]);

  const ColorIconButton = styled(Button)(({ theme }) => ({
    color: "rgb(255,255,255)",
  }));

  const ButtonIcon = styled(ArrowBack)(({ theme }) => ({
    paddingRight: "5px",
  }));

  return (
    <div>
      <Header />
      <h2>
        <ColorIconButton variante={"secondary"} onClick={() => navigate("/")}>
          <ButtonIcon /> {"Back to Home"}
        </ColorIconButton>
      </h2>

      <SingleMovieDetails movie={movie} />
    </div>
  );
};

export default Details;
