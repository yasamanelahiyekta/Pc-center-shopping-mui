import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header';
import { cartnumber } from '../../redux/reducer';
import { addcartnumber, clearcartnumber, creatCart, deletecartnumber, removecartnumber, totalprice } from '../../redux/action';
import { Badge, Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { v4 as uuidv4 } from "uuid"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { data } = useSelector(s => s.cartnumber)
    const [flagg, setFlag] = useState(false)
    const { totalp } = useSelector(s => s.totalprice)
    const dispatch = useDispatch()
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()
    const ref = useRef()
    console.log(totalp);
    const price = data.reduce((x, item) => {
        return x + item.price
    }, 0)
    const help = {};
    const list = []
    const newlist = []
    if (data.length) {


        data.map(item =>
            help[item._id] = []
        )
        data.map(item =>
            help[item._id] = [...help[item._id], item]
        )
        Object.entries(help).map(([key, value]) => list.push({ "product": key, "qty": value.length })
        )
        Object.entries(help).map(([key, value]) => newlist.push({ "product": key, "qty": value })
        )
        localStorage.setItem("items", JSON.stringify(list))
        localStorage.setItem("createcart", JSON.stringify(newlist))
        const creat = JSON.parse(localStorage.getItem("createcart"))
        console.log(list);
    }
    return (
        <>
            <Header flagg={ flagg } />
            <div className='h-screen '>

                { !data.length ? (
                    <div className='h-screen flex justify-center items-center' >
                        <Typography variant='h3'>Cart is empty</Typography>
                    </div>
                ) :
                    <>

                        <TableContainer component={ Paper }>
                            <Table sx={ { minWidth: 650 } } size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell  >Product-Image</TableCell>
                                        <TableCell align='center' >Name</TableCell>
                                        <TableCell align="center">Brand</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">Quantity</TableCell>
                                        <TableCell align="center">Details</TableCell>
                                        <TableCell align="center"></TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    { Object.entries(help).map(([key, value]) => {
                                        return (
                                            <TableRow
                                                key={ uuidv4() }
                                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                                            >

                                                <TableCell
                                                    align='center'><img src={ `${value[0].image}` } alt={ `${value[0].name}` } className='w-16 h-16' /></TableCell>
                                                <TableCell
                                                    align='center'>{ value[0].name }</TableCell>
                                                <TableCell align="center">{ value[0].brand }</TableCell>
                                                <TableCell align="center" ref={ ref }>${ value[0].price * value.length }</TableCell>
                                                <TableCell align="center" className='flex justify-center items-center gap-3'>

                                                    <ButtonGroup>
                                                        <Button
                                                            aria-label="reduce"
                                                            onClick={ () => {
                                                                dispatch(removecartnumber(value[0]._id));
                                                                setFlag(l => !l);
                                                                dispatch(totalprice(data))
                                                            } }
                                                            color='error'
                                                            variant='text'
                                                        >
                                                            <RemoveIcon fontSize="small" />
                                                        </Button>
                                                        <Badge color='secondary' className='m-1'>{ value.length }</Badge>
                                                        <Button
                                                            aria-label="increase"
                                                            onClick={ () => {
                                                                dispatch(addcartnumber(value[0]));
                                                                setFlag(l => !l);
                                                                dispatch(totalprice(data))

                                                            } }
                                                            disabled={ value[0].countInStock == value.length }
                                                            color='success'
                                                            variant='text'

                                                        >
                                                            <AddIcon fontSize="small" />
                                                        </Button>
                                                    </ButtonGroup>
                                                    { value[0].countInStock == value.length && (<Typography variant='caption' color="red">Out of stock</Typography>) }
                                                </TableCell>
                                                <TableCell align="center">details</TableCell>
                                                <TableCell align="center"> <DeleteIcon className='cursor-pointer' color='error' onClick={ () =>
                                                    Swal.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Yes, delete it!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            Swal.fire(
                                                                'Deleted!',
                                                                'Your file has been deleted.',
                                                                'success'
                                                            )
                                                            dispatch(deletecartnumber(value[0]._id))
                                                            setFlag(l => !l)
                                                            dispatch(totalprice(data))
                                                        }
                                                    })
                                                }
                                                /></TableCell>
                                            </TableRow >
                                        )
                                    }
                                    ) }

                                </TableBody>
                            </Table >
                        </TableContainer >
                        <div className='m-2 flex items-center justify-around' >

                            <Button variant='outlined' color='error' onClick={ () => {
                                Swal.fire({
                                    title: 'Are you sure?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, clear it!'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        Swal.fire(
                                            'Cleared!',
                                            'Your cart has been cleared.',
                                            'success'
                                        )
                                        dispatch(clearcartnumber());
                                        setFlag(l => !l)
                                    }
                                })

                            } }>clear</Button>
                            <Button onClick={ () => {
                                if (token) {
                                    navigate("/address")
                                } else {
                                    Swal.fire({
                                        title: "Aren't you logged in?",
                                        icon: 'warning',
                                        showCancelButton: false,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'NO!'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire(
                                                'first you must login!',
                                            )
                                            navigate("/login")
                                        }
                                    })
                                }
                            }
                            } variant='text' color='secondary'>next</Button>
                            <Badge variant='standard' color='secondary' >total price : $ { price }</Badge>
                        </div>
                    </>
                }
            </div >
        </>
    )
}

export default Cart