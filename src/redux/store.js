import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
    home, signup, login, search, changeprofile, oneproduct, cartnumber, creatCart, getprofile,
    totalprice, changepassword, submit, orders, oneorder, flagavatar
} from "./reducer"
const reducers = combineReducers({
    home, signup, login, search, changeprofile, oneproduct,
    cartnumber, creatCart, getprofile, totalprice, changepassword, submit,
    orders, oneorder, flagavatar
})
const middleware = [thunk]
const localHome = JSON.parse(localStorage.getItem("home")) || []
const localsignup = JSON.parse(localStorage.getItem("signup")) || []
const locallogin = JSON.parse(localStorage.getItem("login")) || []
const localcart = JSON.parse(localStorage.getItem("cartnumber")) || []
const localcreate = JSON.parse(localStorage.getItem("creatcart")) || []
const initialState = {
    home: { data: localHome, loading: false, error: "" },
    signup: { data: localsignup, loading: false, error: "" },
    login: { data: locallogin, loading: false, error: "" },
    cartnumber: { data: localcart }, creatCart: { data: localcreate }
}
const store = createStore(reducers, initialState, applyMiddleware(...middleware))
export default store