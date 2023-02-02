import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  styled,
} from "@mui/material";

function SingleMovieDetails({ movie }) {
  const Progress = styled(CircularProgress)(({ theme }) => ({ color: "#fff" }));
  return !movie ? (
    <Card
      orientation="vertical"
      sx={{ bgcolor: "#000", maxWidth: 50, margin: "auto" }}
    >
      <Progress color="info" />
    </Card>
  ) : (
    <Card
      orientation="vertical"
      variant="outlined"
      sx={{
        color: "#fff",
        bgcolor: "#111",
        borderColor: "#fff",
        maxWidth: 350,
        margin: "auto",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.original_title}
            <Typography gutterBottom variant="h6" component="div">
              Released: {movie.release_date}({movie.original_language})
            </Typography>
          </Typography>
          <Typography variant="body2" color="white">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SingleMovieDetails;
