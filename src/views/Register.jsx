import React from "react";
import { Avatar, Grid, Paper, Typography, TextField, Button } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { red } from '@mui/material/colors';
import Header from "../Components/Header";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Register = () => {
    const paperStyle={padding: 20, width: 300, height: "52vh", margin: "40px auto"}
    const headerStyle={margin: 0}
    const avatarStyle={backgroundColor:"#ff0000"}
    const btnStyle={margin: "8px 0", backgroundColor: red[500]}
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {register}=useContext(AuthContext)


    //Try do do some logic to not allow the user go further without to insert the right type of input (field email needs to be filled with email and the password needs to have 6 characters)
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleRegister = (event) => {
        event.preventDefault()
        register(email, password)
    };


    return(
        <>
        <Header />
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign up</h2>
                    <Typography variant="caption" gutterBottom >Please fill this form to create an account</Typography>
                </Grid>
             <form>
                <TextField fullWidth variant="standard" label="Name" placeholder="Enter your name"/>
                <TextField fullWidth variant="standard" label="Username" placeholder="Enter your username" />
                <TextField fullWidth variant="standard" label="Email" id="email" placeholder="Enter your Email" onChange={handleEmailChange}/>
                <TextField fullWidth variant="standard" label="Password" id="password" placeholder="Enter your password" type="password" onChange={handlePasswordChange}/>
                <Button onClick={handleRegister} type="submit" variant="contained" style={btnStyle} fullWidth >Sign Up</Button>
             </form>
            </Paper>
        </Grid>
        </>
       
    )
}

export default Register;
