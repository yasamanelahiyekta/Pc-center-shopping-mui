import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, CircularProgress, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { signup } from '../../redux/action'
const Signuppopup = () => {
    const { data, loading, error } = useSelector(s => s.signup)
    const details = JSON.parse(localStorage.getItem("details"))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(error);
    useEffect(() => {
        if (!error) {
            dispatch(signup(details))
        }
    }, [])
    return (
        <div className='flex justify-center flex-column items-center h-screen bg-gray-300'>
            { loading ? (
                <div className='loading' >
                    <CircularProgress color="secondary" />
                </div>
            ) :
                error ? (<div className='popUp'>
                    <Typography variant='h1' color="red">Oops...</Typography>
                    <div className='flex flex-column justify-evenly items-center gap-2'>
                        <Typography>
                            { error }
                        </Typography>

                    </div>
                    <Button onClick={ () => {
                        navigate("/signup");
                        localStorage.removeItem("signup")
                    } } color='secondary'>go to sign up page</Button>
                </div>) :

                    (
                        <div className=' flex flex-column justify-evenly bg-white items-center border-1 content-center border-solid gap-6
                         border-violet-400 shadow-2xl p-6 rounded-3xl w-3/6 h-2/4 sm:w-1/3 sm:h-2/5' style={ {
                            } }>
                            <div style={ { display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" } }>
                                <CheckCircleIcon color='secondary' />
                                <Typography>now you are signed up 😍</Typography>
                            </div>
                            <Button variant="outlined" color='secondary' onClick={ () => navigate("/login") }>go to login page </Button>
                        </div>
                    )
            }
        </div>
    )
}

export default Signuppopup