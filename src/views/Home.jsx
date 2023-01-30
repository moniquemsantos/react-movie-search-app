import React, { useContext } from "react";
import Header from "../Components/Header";
import MoviesList from "../Components/MoviesList";
import { AuthContext } from "../store/AuthContext";

function HomePage() {


  const {user} = useContext(AuthContext)

    return (
      <div>
        <Header/>
        <h2>Welcome {user?.userName} to my App</h2>
        <MoviesList/>
        {/*{MoviesList && (<h4>Find more information about {MoviesList.lenght} movies</h4>)}*/}
   
      </div>
    );
  }
  
  export default HomePage;
    