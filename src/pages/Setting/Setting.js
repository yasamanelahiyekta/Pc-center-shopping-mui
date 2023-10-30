import React from 'react'
import Header from '../../components/Header/Header'
import { Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

const Setting = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div className='flex gap-x-96 items-center'>
                <div className='h-screen flex flex-column gap-16 justify-center items-start ml-2' >
                    <Typography onClick={ () => navigate("Changeprofile") } > Change and Edit Profile</Typography>
                    <Typography onClick={ () => navigate("chanhepassword") } > Change Password</Typography>
                    <Typography onClick={ () => navigate("UploadAvatar") } > Upload Avatar</Typography>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Setting