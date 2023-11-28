import { Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/action';

const Loginpopup = () => {
    const { data, loading, error } = useSelector(s => s.login)
    console.log(error);
    const inform = JSON.parse(localStorage.getItem("inform"))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (!error) {
            dispatch(login(inform))
        }
    }, [])
    return (
        <div className='flex justify-center flex-column items-center h-screen bg-gray-300'>
            { loading ? (<div className='loading' >
                <CircularProgress color="secondary" />
            </div>) : error ? (<div className='popUp'>
                <Typography variant='h1' color="red">Oops...</Typography>
                <div className='flex flex-column justify-evenly items-center gap-2'>
                    <Typography>
                        { error?.data?.message }
                    </Typography>
                </div>
                <Button onClick={ () => {
                    navigate("/login");
                    localStorage.removeItem("login")
                } } color='secondary'>go to login page</Button>
            </div>) : <div className=' flex flex-column justify-evenly bg-white items-center border-1 content-center border-solid gap-6
                         border-violet-400 shadow-2xl p-6 rounded-3xl w-3/6 h-2/4 sm:w-1/3 sm:h-2/5' style={ {
                } }>
                <div style={ { display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" } }>
                    <CheckCircleIcon color='secondary' />
                    <Typography>now you are logged in 😍</Typography>
                </div>
                <Button variant="outlined" color='secondary' onClick={ () => navigate("/") }>It's time to shop 😍</Button>
            </div> }
        </div>
    )
}

export default Loginpopup