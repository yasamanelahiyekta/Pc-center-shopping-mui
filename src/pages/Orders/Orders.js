import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orders } from '../../redux/action'
import { Button, CircularProgress, Grid, Typography } from '@mui/material'
import { v4 as uuidv4 } from "uuid"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Orders = () => {
    const token = JSON.parse(localStorage.getItem("token"))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { data, loading, error } = useSelector(s => s.orders)
    useEffect(() => {
        dispatch(orders(token))
    }, [])
    console.log(data);
    return (
        <>
            <Header />
            <div className='h-screen'>
                { loading ? (<div className='loading' >
                    <CircularProgress color="secondary" />
                </div>) : error ? (<div className='loading' >
                    <Typography >error</Typography>
                </div>) : (
                    <>
                        <Grid container spacing={ 1 } className='mt-2 bg-fuchsia-600 bg-opacity-10 '>
                            <Grid item xs={ 3 } lg={ 2 } >
                                <Typography variant='subtitle1' className='text-center'>
                                    row
                                </Typography>
                            </Grid>
                            <Grid item xs={ 3 } lg={ 3 }>
                                <Typography variant='subtitle1' className='text-center'>
                                    city
                                </Typography>
                            </Grid>
                            <Grid item xs={ 3 } lg={ 2 }>
                                <Typography variant='subtitle1' className='text-center'>
                                    total Price
                                </Typography>
                            </Grid>
                            <Grid item xs={ 3 } lg={ 2 }>
                                <Typography variant='subtitle1' className='text-center'>
                                    payment Method
                                </Typography>
                            </Grid>
                            <Grid item xs={ 3 } lg={ 3 }>
                                <Typography variant='subtitle1' className='text-center'>
                                    details
                                </Typography>
                            </Grid>
                        </Grid>
                        { data.map((item, index) => {
                            return <Grid container spacing={ 1 } key={ uuidv4 } className='mt-2 bg-fuchsia-600 bg-opacity-10'>
                                <Grid item xs={ 3 } lg={ 2 }>
                                    <Typography className='text-center'>{ index + 1
                                    }</Typography>
                                </Grid>
                                <Grid item xs={ 3 } lg={ 3 }>
                                    <Typography className='text-center'>{ item.shippingAddress.city
                                    }</Typography>
                                </Grid>
                                <Grid item xs={ 3 } lg={ 2 }> <Typography className='text-center'>${ item.totalPrice + 5
                                }</Typography></Grid>
                                <Grid item xs={ 3 } lg={ 2 }> <Typography className='text-center'>{ item.paymentMethod
                                }</Typography></Grid>
                                <Grid item xs={ 3 } lg={ 3 }>
                                    <Typography className='text-center'>
                                        <Button onClick={ () => { navigate(`/orders/${item._id}`) } }>
                                            <InfoOutlinedIcon color='info' />
                                        </Button>
                                    </Typography>
                                </Grid>
                            </Grid>

                        }) }
                    </>
                ) }
            </div >
        </>
    )
}

export default Orders