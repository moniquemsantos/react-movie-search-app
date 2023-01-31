import React from "react";
import { Avatar, Grid, Paper, Typography, TextField, Button } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { red } from '@mui/material/colors';

const SignUp = () => {
    const paperStyle={padding: 20, width: 300, height: "52vh", margin: "0 auto"}
    const headerStyle={margin: 0}
    const avatarStyle={backgroundColor:"#ff0000"}
    const btnStyle={margin: "8px 0", backgroundColor: red[500]}
    return(
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
                <TextField fullWidth variant="standard" label="Name" placeholder="Enter your name" required/>
                <TextField fullWidth variant="standard" label="Username" placeholder="Enter your username" required/>
                <TextField fullWidth variant="standard" label="Email" placeholder="Enter your Email" required/>
                <TextField fullWidth variant="standard" label="Password" placeholder="Enter your password" type="password" required/>
                <Button type="submit" variant="contained" style={btnStyle} fullWidth >Sign Up</Button>
             </form>
            </Paper>
        </Grid>
       
    )
}

export default SignUp;
