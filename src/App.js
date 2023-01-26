import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

// TO-DO list :
// create your Routes : install react-router and create routes : /, /:singleMovieDetails, /login, /register,/chat,  /userProfile,
// create context : 1- AuthContext, 2-Movies Context
// in the Auth context , create login function, export it to login component. You should see a console log in the auth context displaying user/email and password

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
