import { AppBar, Box, Typography, colors } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'


const Footer = () => {
    return (
        < Box sx={ { flexGrow: 1 }
        }>
            <AppBar position="static" color='secondary'>
                <div className='flex  flex-col md:flex-row gap-4 md:gap-0 justify-evenly items-center h-2/6'>
                    <div className='text-left'>
                        <Typography>choose </Typography>
                        <Typography>whatever</Typography>
                        <Typography>you want 😊</Typography>
                    </div>
                    <div className='text-left'>
                        <Typography>tel 1:09214358901</Typography>
                        <Typography>tel 2:09214358902</Typography>
                        <Typography>tel 3:09214358903</Typography>
                    </div>
                    <div className='text-left'>
                        <Typography><GitHubIcon /> pcshope</Typography>
                        <Typography><TelegramIcon /> @Pc-shope</Typography>
                        <Typography>< InstagramIcon /> Pc-shope</Typography>
                    </div>
                </div>
            </AppBar>
        </Box>
    )
}

export default Footer