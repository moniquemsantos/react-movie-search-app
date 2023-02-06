import React, { useContext, useRef } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Home, Login } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircleOutlined } from "@mui/icons-material";
import red from "@mui/material/colors/red";
import { AuthContext } from "../store/AuthContext";
import { MoviesContext } from "../store/MoviesContext";

function Header() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const styles = {
    customColor: {
      backgroundColor: red[500],
    },
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "rgb(80,34,34)",
  }));

  const ColorIconButton = styled(IconButton)(({ theme }) => ({
    color: "rgb(80,34,34)",
  }));

  const navigate = useNavigate();

  let searchInput = useRef();

  const { user, logout } = useContext(AuthContext);

  const { searchMovies } = useContext(MoviesContext);

  const handleSearch = () => {
    console.log("search term", searchInput.current.value);
    searchMovies(searchInput.current.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchInput.current.value);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.customColor} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Movie Search
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Movie Title"
              aria-label="search"
              name="query"
              type="text"
              inputRef={searchInput}
              onKeyDown={handleKeyDown}
            />
            <ColorButton
              color="secondary"
              variant="text"
              onClick={handleSearch}
            >
              Search
            </ColorButton>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ColorIconButton onClick={() => navigate("/")}>
              <Home />
            </ColorIconButton>
            {user && (
              <ColorIconButton onClick={() => navigate("/userprofile")}>
                <AccountCircleOutlined />
              </ColorIconButton>
            )}
            {user ? (
              <ColorButton onClick={logout} variant="">
                Logout
              </ColorButton>
            ) : (
              <ColorIconButton onClick={handleLogin}>
                <Login />
              </ColorIconButton>
            )}
            {!user && (
              <ColorButton
                component={Link}
                to={{
                  pathname: "/register",
                }}
              >
                Register
              </ColorButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
