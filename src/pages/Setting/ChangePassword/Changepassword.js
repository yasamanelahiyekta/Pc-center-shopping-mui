import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, FormHelperText, IconButton, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';

import React, { useRef, useState } from 'react'
import { changepassword } from '../../../redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Changepassword = () => {
    const [pass, setPass] = useState(["", "", ""])
    const [showPassword, setShowPassword] = useState([false, false, false]);
    console.log(showPassword, pass);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = JSON.parse(localStorage.getItem("token"))
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className=' flex justify-center gap-4 items-center  flex-column'>
            <div className='animate-pulse text-purple-950 mb-8'>
                <Typography variant='h5'>Change Password</Typography>
            </div>
            <Box
                component="form"
                autoComplete='off'
                noValidate

            >
                <div className='flex flex-column justify-center items-center gap-8'>
                    <FormControl sx={ { m: 1, width: '25ch' } } variant="outlined" color='secondary'
                        required
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
                        <OutlinedInput
                            // id="outlined-adornment-password"
                            onBlur={ (e) => setPass(l => [e.target.value.trim(), l[1], l[2]]) }
                            type={ showPassword[0] ? 'text' : 'password' }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ () => setShowPassword(l => [!l[0], l[1], l[2]]) }
                                        onMouseDown={ handleMouseDownPassword }
                                        edge="end"
                                    >
                                        { showPassword[0] ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Current Password"


                        />
                    </FormControl>
                    <FormControl sx={ { m: 1, width: '25ch' } } variant="outlined" color='secondary'
                        required
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
                        <OutlinedInput
                            error={ pass[0] !== pass[1] }
                            // id="outlined-adornment-password"
                            onChange={ (e) => setPass(l => [l[0], e.target.value.trim(), l[2]]) }
                            type={ showPassword[1] ? 'text' : 'password' }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ () => setShowPassword(l => [l[0], !l[1], l[2]]) }
                                        onMouseDown={ handleMouseDownPassword }
                                        edge="end"
                                    >
                                        { showPassword[1] ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Current Password"


                        />
                    </FormControl>

                    <FormControl sx={ { m: 1, width: '25ch' } } variant="outlined" color='secondary'
                        required

                    >
                        <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                        <OutlinedInput
                            error={ pass[2] === pass[1] && pass[2] }
                            // id="outlined-adornment-password"
                            onChange={ (e) => setPass(l => [l[0], l[1], e.target.value.trim()]) }
                            type={ showPassword[2] ? 'text' : 'password' }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ () => setShowPassword(l => [l[0], l[1], !l[2]]) }
                                        // onMouseDown={ handleMouseDownPassword }
                                        edge="end"
                                    >
                                        { showPassword[2] ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="New Password"
                        />
                        <FormHelperText id="outlined-password-helper-text">password must be at least 5 item</FormHelperText>
                        <FormHelperText id="outlined-password-helper-text"  >
                            <span className={ pass[2] == pass[1] ? 'text-red-600' : "" }>{ pass[2] == pass[1] && pass[2] ? "use a new password" : "" }</span>
                        </FormHelperText>
                    </FormControl>
                </div>

            </Box>
            <Button color='secondary'
                disabled={ pass[0] !== pass[1] || pass[2] == pass[1] && pass[2] }
                onClick={ () => {
                    if (pass[0] && pass[1] && pass[2]) {
                        dispatch(changepassword(token, pass[0], pass[2]));
                        console.log("change");
                        navigate("/Changepasswordpopup")
                    } else {
                        Swal.fire(
                            'error!',
                            'please , compelete the fields!',
                            'error'
                        )
                    }

                } } >change password</Button>
        </div>
    )
}

export default React.memo(Changepassword)