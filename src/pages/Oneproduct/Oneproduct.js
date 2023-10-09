import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from "../../components/Header/Header";


const Oneproduct = () => {
    const { itemId } = useParams()
    console.log(itemId);
    return (<>
        <Header />
        <div className='App'>Oneproduct</div>
    </>
    )
}

export default Oneproduct