import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../../pages/Home/Home"
import Oneproduct from '../../pages/Oneproduct/Oneproduct'
import Login from '../../pages/Login/Login'
import Signup from '../../pages/SignUp/Signup'
import Signuppopup from '../../pages/SignUp/Signuppopup'
import Loginpopup from '../../pages/Login/Loginpopup'
import Profile from '../../pages/Profile/Profile'
import Setting from '../../pages/Setting/Setting'
import Orders from '../../pages/Orders/Orders'
import Changepassword from '../../pages/Setting/ChangePassword/Changepassword'
import Changeprofile from '../../pages/Setting/ChangeProfile/Changeprofile'
import Uploadavatar from '../../pages/Setting/UploadAvatar/Uploadavatar'
import Cart from '../../pages/Cart/Cart'
import Address from '../../pages/Address/Address'
import Checkout from '../../pages/Checkout/Checkout'
import Checkoutpopup from '../../pages/Checkout/Checkoutpopup/Checkoutpopup'
import Oneorder from '../../pages/Oneorder/Oneorder'
import Uploadavatartpopup from '../../pages/Setting/UploadAvatar/Uploadavatartpopup'
import Changepasswordpopup from '../../pages/Setting/ChangePassword/Changepasswordpopup'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/:itemId" element={ <Oneproduct /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup/Signuppopup" element={ <Signuppopup /> } />
            <Route path="/login/Loginpopup" element={ <Loginpopup /> } />
            <Route path="/Uploadavatartpopup" element={ <Uploadavatartpopup /> } />
            <Route path="/Changepasswordpopup" element={ <Changepasswordpopup /> } />

            <Route path="/signup" element={ <Signup /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/setting" element={ <Setting /> } >
                <Route path="Changeprofile" element={ <Changeprofile /> } />
                <Route path="chanhepassword" element={ <Changepassword /> } />
                <Route path="UploadAvatar" element={ <Uploadavatar /> } />
            </Route>
            <Route path="/orders" element={ <Orders /> } />
            <Route path="/orders/:itemId" element={ <Oneorder /> } />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/address" element={ <Address /> } />
            <Route path="/checkout"   >
                <Route index element={ <Checkout /> } />
                <Route path="submit" element={ <Checkoutpopup /> } />
            </Route>
            <Route path={ "*" } element={ <p>error</p> } />
        </Routes>
    )
}

export default Router