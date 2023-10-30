import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { Box, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Address = () => {
    const [address, setAddress] = useState(["", "", "", ""])
    const navigate = useNavigate()
    // const order = JSON.parse(localStorage.getItem("order"))
    // useEffect(() => {
    //     setAddress(l => [order[0], order[1], order[2], l[3]])
    // })
    // console.log(order);
    return (
        <>
            <Header />
            <div className='h-screen flex items-center justify-center flex-col' ><Box>
                <div className='flex items-center justify-center flex-col gap-8'>
                    <TextField
                        id="standard-multiline-flexible"
                        label="City"
                        onChange={ (e) => setAddress(l => [e.target.value, l[1], l[2], l[3]]) }
                        multiline
                        maxRows={ 1 }
                        // defaultValue={ order ? order[0] : "" }
                        color='secondary'
                        variant="standard"
                    />
                    <TextField
                        error={ address[1].length < 10 }
                        id="standard-textarea"
                        onChange={ (e) => setAddress(l => [l[0], e.target.value, l[2], l[3]]) }
                        label="Address"
                        multiline
                        maxRows={ 4 }
                        // defaultValue={ order ? order[1] : address[1] }
                        color='secondary'
                        variant="standard"
                        helperText={ "address must be at least 10 characters" }
                    />
                    <TextField
                        id="standard-multiline-static"
                        onChange={ (e) => setAddress(l => [l[0], l[1], e.target.value, l[3]]) }
                        label="Postal Code"
                        multiline
                        maxRows={ 1 }
                        // defaultValue={ order ? order[2] : "" }
                        color='secondary'
                        variant="standard"
                    />
                    <TextField
                        id="standard-multiline-static"
                        onChange={ (e) => setAddress(l => [l[0], l[1], l[2], e.target.value]) }
                        label="Mobile"
                        color='secondary'
                        multiline
                        maxRows={ 1 }
                        // defaultValue={ order ? order[3] : "" }
                        variant="standard"
                    />
                    <Button variant='text' color='secondary' onClick={ () => {
                        localStorage.setItem("order", JSON.stringify(address));
                        navigate("/checkout")
                    } }
                        disabled={ !address[0] || !address[1] || !address[2] || !address[3] }
                    >next</Button>
                </div>

            </Box></div>
        </>
    )
}

export default Address