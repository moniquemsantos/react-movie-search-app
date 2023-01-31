import React, { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import IconButton from "@mui/material/IconButton";
//import AccountCircle from "@mui/icons-material/AccountCircle";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import red from "@mui/material/colors/red";
import { AuthContext } from "../store/AuthContext";

function Header(){
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

      const {login, user, setUser} = useContext(AuthContext);

      const logout = () =>{
        setUser(null);

    }
    
    
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
                  MOVIES
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
    
                  <StyledInputBase
                    placeholder=""
                    aria-label="search"
                    name="query"
                    type="text"
                    //inputRef={searchText}
                    // value={query}
                    // onChange={(e)=>{
                    //   console.log(e.target.value);
                    //   setQuery(e.target.value)}}
                  />
                  <Button variant="text">
                    Search
                  </Button>
                </Search>
                <div>
                  {user ? (<Button onClick={logout} variant="">Logout</Button>) : <Button onClick={login} variant="contained">Login</Button>}
                  
                  
                  {/* <IconButton onClick={login}>
                    <AccountCircle />
                  </IconButton> */}
                </div>
              </Toolbar>
            </AppBar>
          </Box>
      )
}




export default Header