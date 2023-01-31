import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./store/AuthContext";
import { MoviesContextProvider } from "./store/MoviesContext";
import HomePage from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import UserProfile from "./Components/UserProfile";
import ProtectedRoute from "./routes/ProtectedRoute";
import { app } from "./config/firebaseConfig";

// TO-DO list :
// create your Routes : install react-router and create routes : /, /:singleMovieDetails, /login, /register,/chat,  /userProfile,
// create context : 1- AuthContext, 2-Movies Context
// in the Auth context , create login function, export it to login component. You should see a console log in the auth context displaying user/email and password

function App() {
  console.log(app);
  return (
    <div>
      <AuthContextProvider>
        <MoviesContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
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
