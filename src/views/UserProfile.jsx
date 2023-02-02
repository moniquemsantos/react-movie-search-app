import React from "react";
import Header from "../Components/Header";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

function UserProfile(){
    const {user} = useContext(AuthContext)

    return (
      <div>
          <Header/>
          <h2>Welcome {user?.userName} to my App</h2>
      </div>
    );
}

export default UserProfile
