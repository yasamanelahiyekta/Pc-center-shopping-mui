import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { home, signup, login, search } from "./reducer"
const reducers = combineReducers({ home, signup, login, search })
const middleware = [thunk]
const localHome = JSON.parse(localStorage.getItem("home")) || []
const localsignup = JSON.parse(localStorage.getItem("signup")) || []
const locallogin = JSON.parse(localStorage.getItem("login")) || []
const initialState = {
    home: { data: localHome, loading: false, error: "" },
    signup: { data: localsignup, loading: false, error: "" },
    login: { data: locallogin, loading: false, error: "" }
}
const store = createStore(reducers, initialState, applyMiddleware(...middleware))
export default store