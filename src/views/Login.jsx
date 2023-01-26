import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography, Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { red } from '@mui/material/colors';


const Login = ({handleChange}) => {
  const paperStyle={padding: 20, width: 300, height: "52vh", margin:"0 auto"}
  const avatarStyle={backgroundColor:"#ff0000"}
  const btnStyle={margin: "8px 0", backgroundColor: red[500]}
  const linkStyle={margin: "8px"}
  return(
     <Grid>
      <Paper style={paperStyle}>
          <Grid align="center">
          <Avatar style={avatarStyle}>
              <LockOutlinedIcon/>
           </Avatar>
              <h2>Login</h2>
          </Grid>
          <TextField variant="standard" label="Username" placeholder="enter username"
          fullWidth required/>
          <TextField variant="standard" label="Password" placeholder="enter password"
          type="password"
          fullWidth required/>
          <Button type="submit" variant="contained" style={btnStyle} fullWidth>Login</Button>
          <Typography> Do you have an account?
              <Link href="#" style={linkStyle} onClick={()=>handleChange("event",1)}>
                 Sign Up
                  </Link>

          </Typography>
      </Paper>

     </Grid>
  )
}

export default Login;