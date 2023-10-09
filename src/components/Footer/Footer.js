import { AppBar, Box, colors } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        < Box sx={ { flexGrow: 1 }
        }>
            <AppBar position="static" color='secondary'>
                footer
            </AppBar>
        </Box>
    )
}

export default Footer