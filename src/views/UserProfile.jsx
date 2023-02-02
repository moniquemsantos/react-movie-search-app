import React from "react";
import Header from "../Components/Header";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

function UserProfile(){
    const {user} = useContext(AuthContext)

    return (
      <div>
          <Header/>
          <h2>Account {user?.email}</h2>
      </div>
    );
}

export default UserProfile
