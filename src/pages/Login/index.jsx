import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Login = () => {
    const [login, setLogin] = useState('');
    const [Senha, setSenha] = useState('');
    return (
        <Grid item xs={12}>
            <FormControl fullWidth >
                <FormHelperText id="login_nome_helper_text">Login</FormHelperText>
                <Input id="login_nome" aria-describedby="login_nome_helper_text" value={Login} 
                    onChange={e => { setLogin(e.target.value) }} />
            </FormControl>
        </Grid>
  
        
    );
}

export default Login;