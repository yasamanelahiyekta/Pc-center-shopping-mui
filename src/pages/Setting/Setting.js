import React from 'react'
import Header from '../../components/Header/Header'
import { Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

const Setting = () => {
    const navigate = useNavigate()

    return (
        <div className='setting'>
            <Header />
            <div className='flex items-center flex-col lg:flex-row md:gap-12'>
                <div className='lg:h-screen h-2/5 flex lg:flex-col gap-16 mt-4 lg:mt-0 md:mr-96  justify-center  ' >
                    <Typography className='cursor-pointer' onClick={ () => navigate("Changeprofile") } > Change and Edit Profile</Typography>
                    <Typography className='cursor-pointer' onClick={ () => navigate("chanhepassword") } > Change Password</Typography>
                    <Typography className='cursor-pointer' onClick={ () => navigate("UploadAvatar") } > Upload Avatar</Typography>
                </div>
                <Outlet />

            </div>
        </div>
    )
}

export default Setting