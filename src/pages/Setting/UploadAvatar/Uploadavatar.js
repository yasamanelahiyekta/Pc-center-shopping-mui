import { Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { flagavatar, getavatar } from '../../../redux/action'

const Uploadavatar = () => {
    const [flag, setFlag] = useState(false)
    const token = JSON.parse(localStorage.getItem("token"))
    const [pic, setPic] = useState("")
    const ref = useRef()
    const formdata = new FormData()
    formdata.append("profile-image", pic)
    console.log(formdata);
    const dispatch = useDispatch()
    console.log("hiii");
    return (
        <form ref={ ref } className='flex justify-center flex-col gap-3 items-center ml-6'>
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
                dispatch(flagavatar())
            } } variant='text' color='secondary' >Change Avatar</Button>
        </form>
    )
}

export default Uploadavatar