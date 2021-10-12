import { Grid,TextField, Paper, Avatar, Button } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 300,
    margin: '20px auto'
}

const textfieldStyle = {
    margin:'10px'
}

const avatarStyle = {
    backgroundColor: '#2f7fad'
}

function Login() {
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <LockOpenIcon/>
                    </Avatar>
                    <h3>Sign in</h3>
                </Grid>

                <TextField 
                    style={textfieldStyle}
                    type="email" 
                    fullWidth 
                    placeholder="Email address" 
                    label="Email" 
                    required
                    variant="standard"
                />
                <TextField 
                    type="password" 
                    fullWidth 
                    placeholder="Password" 
                    label="Password" 
                    required
                    variant="standard"
                    style={textfieldStyle}
                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </FormGroup>
               <Button type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>
            </Paper>
        </Grid>
    )
}

export default Login
