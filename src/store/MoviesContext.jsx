import { createContext,  useState } from "react";
import { API_KEY } from "../env";



export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
    console.log("props", props);
    const API_URL=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch(API_URL);
        const result = await response.json();
        setMovies(result.results);
    };
    return(
        <MoviesContext.Provider value={{movies, fetchMovies}}>
            {props.children}
        </MoviesContext.Provider>
    );

    
};
    