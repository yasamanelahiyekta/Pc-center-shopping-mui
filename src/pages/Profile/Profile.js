import React from 'react'
import Header from '../../components/Header/Header'
import { Typography } from '@mui/material';

const Profile = () => {
    const { user } = JSON.parse(localStorage.getItem("login"))
    console.log(user);
    return (
        <>
            <Header />
            <div className='h-screen flex flex-col justify-evenly items-center'>
                <div className='w-24'><img src={ `${user.image}` } /></div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Email :</Typography>
                    <Typography>{ user.email }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>User Name: :</Typography>
                    <Typography>{ user.username }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Mobile :</Typography>
                    <Typography>{ user.email }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>First Name :</Typography>
                    <Typography>{ user.email }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Last Name :</Typography>
                    <Typography>{ user.email }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Gender :</Typography>
                    <Typography>{ user.email }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Age :</Typography>
                    <Typography>{ user.email }</Typography>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Typography>Ciyt :</Typography>
                    <Typography>{ user.email }</Typography>
                </div>

            </div>
        </>
    )
}

export default Profile