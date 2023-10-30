import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from 'react-redux';
import { addcartnumber, oneproduct, removecartnumber, totalprice } from '../../redux/action';
import { Box, Button, ButtonGroup, Rating, Typography, Badge, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ToastContainer, toast } from 'react-toastify';


const Oneproduct = () => {
    const { itemId } = useParams()
    const [flagg, setFlag] = useState(false);
    const cartnumber = useSelector(s => s.cartnumber)
    const { data, loading, error } = useSelector(s => s.oneproduct)
    const count = cartnumber.data.filter(item => item._id == data._id)
    console.log(cartnumber);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(oneproduct(itemId))
    }, [])

    return (<>
        <Header flagg={ flagg } />{ loading ? ((<div className='loading' >
            <CircularProgress color="secondary" />
        </div>)) : error ? (<div className='loading' >
            <Typography >error</Typography>
            <Button onClick={ () => { setFlag(l => !l) } }>ok</Button>
        </div>) :
            <div className='h-screen flex justify-evenly items-center'>
                <div>
                    <img src={ data.image } alt={ data.name } width="150px" />
                </div>
                <div className='flex flex-column justify-center items-center gap-6' >
                    <Typography>brand : { data.brand }</Typography>
                    <Typography>name : { data.name }</Typography>
                    <Typography>countInStock : { data.countInStock }</Typography>
                    <Typography>color : { data.color }</Typography>
                    <Typography>price : ${ data.price }</Typography>
                    <Box
                        sx={ {
                            color: 'action.active',
                            display: 'flex',
                            flexDirection: 'column',
                            '& > *': {
                                marginBottom: 2,
                            },
                            '& .MuiBadge-root': {
                                marginRight: 4,
                            },
                        } }
                    >
                        <div>
                            <Button disabled={ count.length == data.countInStock } color='secondary' onClick={ () => {
                                setFlag(l => !l);
                                // dispatch(totalprice(data));
                                dispatch(addcartnumber(data));
                                toast.success('PRODUCT ADDED SUCCESSFULY', {
                                    position: "top-center",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                });
                            } } >Add To Cart</Button>
                            { count.length == data.countInStock && <Typography variant='caption' color="red">Out of stock</Typography> }
                        </div>
                    </Box>
                </div >
                <Typography variant='caption' width="90px" >description : { data.description }</Typography>
            </div > }
        <ToastContainer />
    </>
    )
}

export default Oneproduct