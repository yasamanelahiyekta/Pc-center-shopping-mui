import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getavatar } from '../../../redux/action'
import { Button, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { red } from '@mui/material/colors'

const Uploadavatartpopup = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data, loading, error } = useSelector(s => s.getavatar)
    console.log(data, loading, error);
    // useEffect(() => {
    //     dispatch(getavatar(token, formdata))
    // }, [])
    return (
        <div className='h-screen flex flex-col justify-evenly items-center   bg-violet-200'>
            { loading ? (<div className='loading' >
                <CircularProgress color="secondary" />
            </div>) : error ? (
                <>
                    <div className='animate-bounce' >
                        { error.response?.data.message == "jwt expired" ? (<Typography className='text-red-700 ' variant='h3' >"you're token is expired 😟"</Typography>) :
                            (<Typography className='text-red-700' variant='h3' >{ error.response?.data.message ? `${error.response?.data.message}🙄` : "somthing went wrong!!!!😶" }</Typography>) }

                    </div>
                    <Button
                        size='large'
                        color='secondary'
                        onClick={ () => (navigate("/setting/UploadAvatar")) }
                    >ok</Button>
                </>
            ) : (
                <>
                    <Typography variant='h3' className='animate-bounce' >{ data?.message ? `${data?.message}😍` : "" }</Typography>
                    <Button
                        size='large'
                        color='secondary'
                        onClick={ () => (navigate("/setting/UploadAvatar")) }
                    >ok</Button>
                </>
            ) }

        </div>
    )
}

export default Uploadavatartpopup