import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submit } from '../../../redux/action'
import { Badge, Button, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Checkoutpopup() {
    const { data, loading, error } = useSelector(s => s.submit)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const order = JSON.parse(localStorage.getItem("order"))
    const token = JSON.parse(localStorage.getItem("token"))
    const items = JSON.parse(localStorage.getItem("items"))
    const cartnumber = JSON.parse(localStorage.getItem("cartnumber"))
    console.log(order[3].length);
    const price = cartnumber?.reduce((x, item) => {
        return x + item.price
    }, 0)
    console.log(data);
    useEffect(() => {
        if (cartnumber?.length) {

            dispatch(submit(token, order[0], order[1], order[2], order[3], items, price))
        }


    }, [])
    return (
        <div>{ loading ? (<div className='loading' >
            <CircularProgress color="secondary" />
        </div>) : error ?
            <div className='h-screen flex flex-col justify-center items-center gap-4'>
                <Badge>{ error.message }</Badge>
                <Button onClick={ () => navigate("/address") } >OK</Button>
            </div>
            : <div className='h-screen flex flex-col justify-center items-center gap-4'>
                <Typography variant="caption" color="purple"></Typography>
                <Button onClick={ () => navigate("/") }>done</Button>
            </div> }</div>
    )
}

export default Checkoutpopup