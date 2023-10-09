import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FilledInput, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../redux/action';
import Header from "../../components/Header/Header";


const Signup = () => {
    const [details, setDetails] = useState(["", "", "", ""])
    localStorage.setItem("details", JSON.stringify(details))
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Header />
            <div className='signUp'>
                <TextField
                    label="your username"
                    type='text'
                    variant="filled"
                    helperText=" username must be at least 5 characters"
                    color='secondary'
                    onChange={ (e) => setDetails(l => [e.target.value, l[1], l[2], l[3]]) }
                />
                <TextField
                    type='email'
                    label="your email"
                    variant="filled"
                    helperText="your email must contained @ "
                    color='secondary'
                    onChange={ (e) => setDetails(l => [l[0], e.target.value, l[2], l[3]]) } />
                <FormControl sx={ { m: 1, width: '25ch' } } variant="filled">
                    <InputLabel htmlFor="filled-adornment-password" color='secondary' >Password</InputLabel>
                    <FilledInput
                        onChange={ (e) => setDetails(l => [l[0], l[1], e.target.value, l[3]]) }
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
                <TextField
                    label="your phone"
                    type='tel'
                    variant="filled"
                    helperText="mobile must be exactly 11 characters"
                    color='secondary'
                    onChange={ (e) => setDetails(l => [l[0], l[1], l[2], e.target.value]) } />
                <Button color="secondary" onClick={ () => {
                    dispatch(signup(details));
                    navigate("/signup/Signuppopup")
                } }>Sign up</Button>
                <Typography variant="caption">do you have an account?<Typography variant="caption" color="#B02DC0"
                    style={ { cursor: "pointer" } }
                    onClick={ () => navigate("/login") } > Login </Typography></Typography>
            </div >
        </>
    )
}

export default Signup