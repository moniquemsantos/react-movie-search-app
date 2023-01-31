import { createContext,  useState } from "react";
import { API_KEY } from "../config/config";



export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
    console.log("props", props);
    const API_URL=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const SEARCH_API_URL=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([]);


    const fetchMovies = async () => {
        const response = await fetch(API_URL);
        const result = await response.json();
        setMovies(result.results);
    };
    const searchMovies = async (query) => {
        const response = await fetch(`${SEARCH_API_URL}&query=${query}`);
        const result = await response.json();
        setMovies(result.results);
    };
    return(
        <MoviesContext.Provider value={{movies, fetchMovies, searchMovies}}>
            {props.children}
        </MoviesContext.Provider>
    );

    
};
    