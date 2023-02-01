import { createContext,  useState } from "react";
import { API_KEY } from "../config/config";



export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
    const API_URL=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const SEARCH_API_URL=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
    const MOVIE_API_URL=`https://api.themoviedb.org/3/movie`;
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});


    const fetchMovies = async () => {
        const response = await fetch(API_URL);
        const result = await response.json();
        setMovies(result.results);
    };
    const fetchMovieById = async (id) => {
        const response = await fetch(`${MOVIE_API_URL}/${id}?api_key=${API_KEY}`);
        const result = await response.json();
        setMovie(result);
    };
    const searchMovies = async (query) => {
        const response = await fetch(`${SEARCH_API_URL}&query=${query}`);
        const result = await response.json();
        setMovies(result.results);
    };
    return(
        <MoviesContext.Provider value={{movies, fetchMovies, searchMovies, movie, fetchMovieById}}>
            {props.children}
        </MoviesContext.Provider>
    );

    
};
    