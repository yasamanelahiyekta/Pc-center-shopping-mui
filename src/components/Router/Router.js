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
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/:itemId" element={ <Oneproduct /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup/Signuppopup" element={ <Signuppopup /> } />
            <Route path="/login/Loginpopup" element={ <Loginpopup /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/setting" element={ <Setting /> } />
            <Route path="/setting/Changeprofile" element={ <Changeprofile /> } />
            <Route path="/setting/chanhepassword" element={ <Changepassword /> } />
            <Route path="/setting/UploadAvatar" element={ <Uploadavatar /> } />
            {/* </Route> */ }
            <Route path="/orders" element={ <Orders /> } />
        </Routes>
    )
}

export default Router