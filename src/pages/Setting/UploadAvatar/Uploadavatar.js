import { TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getavatar } from '../../../redux/action'

const Uploadavatar = () => {
    const [flag, setFlag] = useState(false)
    const token = JSON.parse(localStorage.getItem("token"))
    const ref = useRef()
    const formdata = new FormData()
    console.log(formdata);
    const dispatch = useDispatch()
    console.log("hiii");
    return (
        <form ref={ ref } className='flex justify-center items-center ml-6'>
            <TextField

                onChange={ (e) => {
                    localStorage.setItem("profile-image", JSON.stringify(e.target.value));
                    setFlag(l => !l)
                } }
                onBlur={ () => {

                    setFlag(l => !l);
                    dispatch(getavatar(token, formdata))
                } }
                id="outlined-file-input"
                // label="file"
                type="file"
                color='secondary'
            />
        </form>
    )
}

export default Uploadavatar