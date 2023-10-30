import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FilledInput, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "react-toastify/dist/ReactToastify.css";
import { dorender, getToken, login } from '../../redux/action';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/Header/Header';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inform, setInform] = useState(["", ""])
    const loginInform = localStorage.setItem("inform", JSON.stringify(inform))
    const { data } = useSelector(s => s.signup)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (<>
        <Header />
        <div className='login'>
            <TextField id="filled-basic"
                onChange={ (e) => setInform(l => [e.target.value, l[1]]) }
                label="your email"
                variant="filled"
                helperText="your email must contained @ "
                color='secondary' />
            <FormControl sx={ { m: 1, width: '25ch' } } variant="filled">
                <InputLabel htmlFor="filled-adornment-password" color='secondary' >Password</InputLabel>
                <FilledInput
                    onChange={ (e) => setInform(l => [l[0], e.target.value]) }
                    color='secondary'
                    id="filled-adornment-password"
                    type={ showPassword ? 'text' : 'password' }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={ handleClickShowPassword }
                                onMouseDown={ handleMouseDownPassword }
                                edge="end"
                            >
                                { showPassword ? <VisibilityOff /> : <Visibility /> }
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <FormHelperText id="filled-adornment-password" >your email must be at least 5 character</FormHelperText>
            </FormControl>
            <Button color="secondary" onClick={ () => {
                if (inform[0] && inform[1]) {
                    dispatch(login(inform));
                    navigate("/login/Loginpopup");
                } else {
                    Swal.fire(
                        'error!',
                        'please , compelete the fields!',
                        'error'
                    )
                }
            } } >Login</Button>
            { !data.success ? <Typography variant="caption">you don't have an account?<Typography variant="caption" color="#B02DC0"
                style={ { cursor: "pointer" } }
                onClick={ () => navigate("/signup") } > sign up </Typography></Typography> : "" }
        </div>
    </>
    )
}
export default Login