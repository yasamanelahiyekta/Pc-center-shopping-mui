import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getHome, getToken, login } from "../../redux/action"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, CircularProgress, Grid, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header/Header";
import { v4 as uuidv4 } from 'uuid';
import Footer from "../../components/Footer/Footer";


const Home = () => {
    const [search, setsearch] = useState("")
    const loader = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    const { data, loading, error } = useSelector(s => s.home)
    const logiin = useSelector(s => s.login)
    console.log(logiin);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const home = JSON.parse(localStorage.getItem("home"))
    console.log(data);
    useEffect(() => {
        if (!home?.length) {
            dispatch(getHome())
            // dispatch(getToken(token))
        }
    }, [])
    return (<>
        <Header search={ search } setsearch={ setsearch } />
        <div className="flex justify-center items-center h-f overflow-y-scroll mb-4 mr-0.5 scroll-smooth">
            { loading ? (
                <>
                    <Grid container className="home">

                        {
                            loader.map(item => {
                                return <Grid item key={ uuidv4() } className="m-4"  >



                                    <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        <div className="flex items-center mt-4 space-x-3">
                                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                            </svg>
                                            <div>
                                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            </div>
                                        </div>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </Grid>
                            }
                            )
                        }
                    </Grid>

                </>
            ) : error ? (<p>{ error }</p>) :
                (<>
                    <Grid container className="home">
                        { data.filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()) ||
                            item.brand.toLowerCase().includes(search.trim().toLowerCase())
                        ).map(item => {
                            return <Grid item key={ item._id } className="m-4"  >
                                <Card sx={ { minWidth: 345, maxWidth: 345 } } variant="outlined"
                                    onClick={ () => {
                                        navigate(`${item._id}`);

                                    }
                                    }
                                    style={ { backgroundColor: !item.countInStock && "gray", borderColor: !item.countInStock && "red" } } >
                                    <CardHeader
                                        title={ item.brand }
                                    />
                                    <div className="imagehome">
                                        <img src={ item.image } alt={ item.name } />
                                    </div>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            { item.name }
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <Rating name="read-only" value={ item.rating } precision={ 0.1 } size="small" readOnly disabled={ !item.countInStock } />
                                        <Typography m={ 2 }><span style={ { color: "green" } }>$</span>{ item.price }</Typography>
                                        <Typography m={ 1 } color={ !item.countInStock && "#AB0000" }><span >count in stock : </span>{ item.countInStock }</Typography>
                                    </CardActions>
                                </Card>
                            </Grid>
                        }
                        ) }
                    </Grid>
                </>
                )
            }
            <ToastContainer />
        </div>

    </>
    )
}

export default Home