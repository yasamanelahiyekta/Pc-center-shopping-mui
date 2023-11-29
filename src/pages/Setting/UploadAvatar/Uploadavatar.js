import { Button, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { flagavatar, getavatar, getprofile } from '../../../redux/action'
import { useNavigate } from 'react-router-dom'

const Uploadavatar = () => {
    const token = JSON.parse(localStorage.getItem("token"))
    const [pic, setPic] = useState("")
    const ref = useRef()
    const formdata = new FormData()
    const navigate = useNavigate()
    formdata.append("profile-image", pic)
    console.log(formdata);
    const dispatch = useDispatch()
    console.log("hiii");
    return (
        <div className='flex flex-col items-center justify-center gap-10 h-screen'>
            <div className='animate-pulse text-purple-950'>
                <Typography variant='h5'>Upload Avatar</Typography>
            </div>
            <form ref={ ref } className='flex justify-center flex-col gap-3 items-center '>
                <TextField

                    onChange={ (e) => {
                        setPic(e.target.files[0]);
                        console.log(e.target.files[0]);
                    } }
                    id="outlined-file-input"
                    // label="file"
                    type="file"
                    color='secondary'
                />
                <Button onClick={ () => {
                    dispatch(getavatar(token, formdata));
                    dispatch(getprofile(token));
                    dispatch(flagavatar());
                    navigate("/Uploadavatartpopup")
                } } variant='text' color='secondary' >Change Avatar</Button>
            </form>
        </div>
    )
}

export default Uploadavatar