import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function ProtectedRoute({children}) {
    
    const { user } = useContext(AuthContext);

    const isUser = user ? true : false;

    return <>{isUser ? children : <Navigate to="/" />} </>;
}
    


export default ProtectedRoute;

