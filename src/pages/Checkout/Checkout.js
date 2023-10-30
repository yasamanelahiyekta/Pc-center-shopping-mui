import React from 'react'
import Header from '../../components/Header/Header'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import { v4 as uuidva } from "uuid"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearcartnumber, submit } from '../../redux/action';
const Checkout = () => {
    const order = JSON.parse(localStorage.getItem("createcart"))
    const cartnumber = JSON.parse(localStorage.getItem("cartnumber"))
    console.log(order);
    const orderdetails = JSON.parse(localStorage.getItem("order"))
    const token = JSON.parse(localStorage.getItem("token"))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const items = JSON.parse(localStorage.getItem("items"))
    const price = cartnumber.reduce((x, item) => {
        return x + item.price
    }, 0)
    return (
        <div div className='h-screen'>
            <Header />
            <div className=' flex  items-start mt-2  '>
                <TableContainer component={ Paper }>
                    <Table sx={ { minWidth: 650 } } aria-label="caption table">
                        <caption>price : ${ price } </caption>
                        <caption>shipping price : $5 </caption>
                        <caption>total price : ${ price + 5 } </caption>
                        <TableHead>
                            <TableRow>
                                <TableCell align='left'>Name</TableCell>
                                <TableCell align='left' >Brand</TableCell>
                                <TableCell align='left' >Color</TableCell>
                                <TableCell align='left' >Quantity</TableCell>
                                <TableCell align='left' >Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                order.map(item => {
                                    return (
                                        <TableRow key={ uuidva() }>
                                            <TableCell align='left'>{ item.qty[0].name }</TableCell>
                                            <TableCell align='left'>{ item.qty[0].brand }</TableCell>
                                            <TableCell align='left'>{ item.qty[0].color }</TableCell>
                                            <TableCell align='left'>{ item.qty.length }</TableCell>
                                            <TableCell align='left'>$ { item.qty[0].price * item.qty.length }</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table></TableContainer>
            </div>
            <div className='flex justify-around items-center m-3'>
                <Button variant='text' color='secondary' onClick={ () => navigate("/cart") } >Edit</Button>
                <Button variant='text' color='secondary' onClick={ () => {
                    navigate("submit")
                } }>Submit</Button>
            </div>
        </div>
    )
}

export default Checkout