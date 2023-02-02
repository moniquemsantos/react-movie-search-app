import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { red } from "@mui/material/colors";
import { AuthContext } from "../store/AuthContext";
import Header from "../Components/Header";

const Login = () => {
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    width: 300,
    height: "52vh",
    margin: "40px auto",
  };
  const avatarStyle = { backgroundColor: "#ff0000" };
  const btnStyle = { margin: "8px 0", backgroundColor: red[500] };
  const linkStyle = { margin: "8px" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (event) => {
    // DO YOUR DUE DILIGENCE HERE: check email format, and maybe password length
    event.preventDefault();
    await login(email, password).then((loggedUser) => {
      if (loggedUser) {
        navigate("/");
      }
    });
  };
  return (
    <>
      <Grid>
        <Header />
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Login</h2>
          </Grid>
          <TextField
            variant="standard"
            label="Email"
            id="email"
            fullWidth
            required
            onChange={handleEmailChange}
          />
          <TextField
            variant="standard"
            label="Password"
            type="password"
            fullWidth
            required
            onChange={handlePasswordChange}
          />
          <Button
            onClick={handleLogin}
            type="submit"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Login
          </Button>
          <Typography>
            {" "}
            Do you have an account?
            <Link to="/register" style={linkStyle}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
