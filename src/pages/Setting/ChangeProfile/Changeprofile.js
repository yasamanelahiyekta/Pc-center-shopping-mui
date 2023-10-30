import { Button, CircularProgress, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from "uuid"
import { changeprofile } from '../../../redux/action'

const Changeprofile = () => {
    const gender = ["male", "female"]
    const [flag, setFlag] = useState(false)
    const [pdetailes, setPdetailes] = useState(["", "", "", "", "", "", "", ""])
    const dispatch = useDispatch()
    const localpd = JSON.parse(localStorage.getItem("pdetails"))
    const { data, loading, error } = useSelector(s => s.changeprofile)
    useEffect(() => {
        if (localpd?.length) {
            dispatch(changeprofile(token, localpd[3], localpd[4], localpd[5], localpd[6], localpd[7]))
        }
    }, [flag])
    const email = JSON.parse(localStorage.getItem("email"))
    const token = JSON.parse(localStorage.getItem("token"))
    console.log(localpd);
    return (
        <>
            <div className=' flex flex-col justify-evenly items-center ml-36 gap-2'>
                { loading ? <div className='loading' >
                    <CircularProgress color="secondary" />
                </div> : error ? <p>{ error }</p> :
                    <>
                        { localpd ?
                            <Alert onClose={ () => { } } severity="success" color="success">
                                user profile was updated
                            </Alert>
                            : "" }
                        <div div className='flex justify-center items-center gap-2'>
                            <TextField
                                variant='standard'
                                color='secondary'
                                label="Email"
                                type='email'
                                onChange={ (e) => setPdetailes(l => [email || e.target.value, l[1], l[2], l[3], l[4], l[5], l[6], l[7]]) }
                                value={ email || pdetailes[0] }
                            />
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <TextField
                                variant='standard'
                                color='secondary'
                                label="User Name"
                                type='text'
                                onChange={ (e) => setPdetailes(l => [email ? email : l[0], e.target.value, l[2], l[3], l[4], l[5], l[6], l[7]]) }
                            />
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <TextField
                                variant='standard'
                                color='secondary'
                                label="Mobile"
                                type='tel'
                                onChange={ (e) => setPdetailes(l => [l[0], l[1], e.target.value, l[3], l[4], l[5], l[6], l[7]]) }
                            />
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <TextField
                                variant='standard'
                                color='secondary'
                                label="First Name"
                                type='text'
                                onChange={ (e) => setPdetailes(l => [l[0], l[1], l[2], e.target.value, l[4], l[5], l[6], l[7]]) }
                            />
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <TextField
                                variant='standard'
                                color='secondary'
                                label="Last Name"
                                type='text'
                                onChange={ (e) => setPdetailes(l => [l[0], l[1], l[2], l[3], e.target.value, l[5], l[6], l[7]]) }
                            />
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <FormControl variant="standard" sx={ { m: 1, minWidth: 120 } } color='secondary'>
                                <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={ `${pdetailes[5]}` }
                                    label="Gender"

                                    onChange={ (e) => setPdetailes(l => [l[0], l[1], l[2], l[3], l[4], e.target.value, l[6], l[7]]) }
                                >
                                    { gender.map(item => {
                                        return <MenuItem value={ `${item}` } key={ uuidv4() } >{ item }</MenuItem>
                                    }) }
                                </Select>
                                <FormHelperText> please choose your gender 👦🏽👧🏽    </FormHelperText>
                            </FormControl>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <TextField
                                type='number'
                                variant='standard'
                                color='secondary'
                                label="Age"
                                onChange={ (e) => setPdetailes(l => [l[0], l[1], l[2], l[3], l[4], l[5], e.target.value, l[7]]) }
                            />
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <TextField
                                type='text'
                                variant='standard'
                                color='secondary'
                                label="City"
                                onChange={ (e) => setPdetailes(l => [l[0], l[1], l[2], l[3], l[4], l[5], l[6], e.target.value]) }
                            />
                        </div>
                        <Button onClick={ () => {
                            console.log("hilo");
                            localStorage.setItem("pdetails", JSON.stringify(pdetailes));
                            setFlag(l => !l)

                        } } color='secondary' >Edit</Button>
                    </> }
            </div ></>
    )
}

export default Changeprofile