import React from 'react'
import Header from '../../components/Header/Header'
import { Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

const Setting = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className='h-screen flex flex-column gap-16 justify-center items-start' >
                <Typography OnClick={ () => navigate("/setting/Changeprofile") } > Change and Edit Profile</Typography>
                <Typography OnClick={ () => navigate("/setting/chanhepassword") } > Change Password</Typography>
                <Typography OnClick={ () => navigate("/setting/UploadAvatar") } > Upload Avatar</Typography>
            </div>
            <Outlet />
        </>
    )
}

export default Setting