import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./store/AuthContext";
import { MoviesContextProvider } from "./store/MoviesContext";
import HomePage from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import UserProfile from "./Components/UserProfile";
import ProtectedRoute from "./Components/routes/ProtectedRoute";

// TO-DO list :
// create your Routes : install react-router and create routes : /, /:singleMovieDetails, /login, /register,/chat,  /userProfile,
// create context : 1- AuthContext, 2-Movies Context
// in the Auth context , create login function, export it to login component. You should see a console log in the auth context displaying user/email and password

function App() {
  return (
    <div>
      <AuthContextProvider>
      <MoviesContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route 
            path="userprofile" 
            element={
            <ProtectedRoute>
            <UserProfile />
            </ProtectedRoute>
           }
           />
        </Routes>
      </MoviesContextProvider>
    
      </AuthContextProvider>
      </div>
  );
}

export default App;
