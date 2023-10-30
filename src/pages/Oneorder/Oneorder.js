import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { oneorder } from '../../redux/action';
import Header from '../../components/Header/Header';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { v4 as uuidv4 } from "uuid"

const Oneorder = () => {
    const { itemId } = useParams()
    const token = JSON.parse(localStorage.getItem("token"))
    const { data, loading, error } = useSelector(s => s.oneorder)
    console.log(data.orderItems);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(oneorder(token, itemId))
    }, [])
    return (
        <>
            <Header />{ loading ? (<div className='loading' >
                <CircularProgress color="secondary" />
            </div>) : error ? (<div className='loading' >
                <Typography >error</Typography>
            </div>) : (<div className='h-screen flex flex-col justify-around'>


                <div className='flex items-center justify-normal gap-10 m-2  '>
                    <div className='flex flex-col items-start justify-center gap-1 bg-fuchsia-700 bg-opacity-5 hover:bg-opacity-10 rounded-2xl p-1'>
                        <Typography variant='button'>
                            <Button variant='text' color='secondary' className='mr-1'>City</Button>
                            : { data.shippingAddress?.city }</Typography>
                        <Typography variant='button'>
                            <Button variant='text' color='secondary' className='mr-1'>Address</Button>
                            : { data.shippingAddress?.address }</Typography>
                        <Typography variant='button'>
                            <Button variant='text' color='secondary' className='mr-1'>Postal Code</Button>
                            : { data.shippingAddress?.postalCode }</Typography>
                        <Typography variant='button'>
                            <Button variant='text' color='secondary' className='mr-1'>Phone</Button>
                            : { data.shippingAddress?.phone }</Typography>
                        <Typography variant='button'>
                            <Button variant='text' color='secondary' className='mr-1'>Payment Method</Button>
                            : { data.paymentMethod }</Typography>
                        <Typography variant='button'>
                            <Button variant='text' color='secondary' className='mr-1'>Total Price  </Button>
                            : ${ data.totalPrice + 5 }</Typography>
                    </div>
                    <div className='w-10/12'>
                        <Grid container spacing={ 1 } className='bg-fuchsia-500 bg-opacity-5'>
                            <Grid item xs={ 3 } className='text-center'>Row</Grid>
                            <Grid item xs={ 3 } className='text-center'>Name</Grid>
                            <Grid item xs={ 3 } className='text-center'>Price</Grid>
                            <Grid item xs={ 3 } className='text-center'>Quantity</Grid>
                        </Grid>
                        <div className='mt-3'>

                            { data.orderItems?.map((item, index) => {
                                return <Grid key={ uuidv4() } container spacing={ 1 } className='bg-fuchsia-500 bg-opacity-5 mt-3' >
                                    <Grid item xs={ 3 } className='text-center'>{ index + 1 }</Grid>
                                    <Grid item xs={ 3 } className='text-center'>{ item.product.name }</Grid>
                                    <Grid item xs={ 3 } className='text-center'>${ item.product.price * item.qty }</Grid>
                                    <Grid item xs={ 3 } className='text-center'>{ item.qty }</Grid>
                                </Grid>
                            })

                            }
                        </div>
                    </div>
                </div>
                <Button onClick={ () => navigate("/orders") } variant='text' color='secondary' >Back</Button>

            </div>) }
        </>
    )
}

export default Oneorder