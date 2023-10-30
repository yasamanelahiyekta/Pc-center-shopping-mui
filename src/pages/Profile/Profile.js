import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getprofile } from '../../redux/action';

const Profile = () => {
    const { user } = JSON.parse(localStorage.getItem("user")) || JSON.parse(localStorage.getItem("login"))
    const { data, loading, error } = useSelector(s => s.getprofile)
    console.log(data);
    const dispatch = useDispatch()
    const token = JSON.parse(localStorage.getItem("token"))
    useEffect(() => {
        dispatch(getprofile(token))
    }, [])
    console.log(user);
    return (
        <>
            <Header />
            <div className='h-screen flex flex-col justify-evenly items-center'>
                <div className='w-24'><img src={ `${user?.image}` } alt='user image' /></div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Email :</Typography>
                    <Typography>{ user?.email }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>User Name: :</Typography>
                    <Typography>{ user?.username }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Mobile :</Typography>
                    <Typography>{ user?.mobile }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>First Name :</Typography>
                    <Typography>{ user?.firstname }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Last Name :</Typography>
                    <Typography>{ user?.lastname }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Gender :</Typography>
                    <Typography>{ user?.gender }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Age :</Typography>
                    <Typography>{ user?.age }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Ciyt :</Typography>
                    <Typography>{ user?.city }</Typography>
                </div>

            </div>
        </>
    )
}

export default Profile