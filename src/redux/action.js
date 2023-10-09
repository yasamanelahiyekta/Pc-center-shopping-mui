import axios from "axios"

export const getHome = () => async (dispatch, getstate) => {
    try {
        dispatch({ type: "home", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios("http://kzico.runflare.run/product/")
        const newData = JSON.parse(JSON.stringify(data))
        localStorage.setItem("home", JSON.stringify(newData))
        dispatch({ type: "home", payload: { data: newData, loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "home", payload: { data: [], loading: false, error: error.message } })
        console.log(error);
    }
}
export const signup = (details) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "signup", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios.post(
            "http://kzico.runflare.run/user/signup",
            {
                username: details[0],
                email: details[1],
                password: `#${details[2]}`,
                mobile: details[3],
            }
        );
        localStorage.setItem("signup", JSON.stringify(data))
        const newData = JSON.parse(JSON.stringify(data))
        console.log(newData);
        dispatch({ type: "signup", payload: { data: newData, loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "signup", payload: { data: [], loading: false, error: error.response.data.message } })
        console.log(error.response);
    }
}
export const login = (inform) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "login", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios.post(
            "http://kzico.runflare.run/user/login",
            {
                email: inform[0],
                password: `#${inform[1]}`,
            }
        )
        const newData = JSON.parse(JSON.stringify(data))
        localStorage.setItem("login", JSON.stringify(data))
        localStorage.setItem("token", JSON.stringify(data.user.token))
        localStorage.setItem("email", JSON.stringify(data.user.email))
        localStorage.setItem("avatar", JSON.stringify(data.user.image))
        console.log(newData, "action");
        dispatch({ type: "login", payload: { data: newData, loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "login", payload: { data: [], loading: false, error: error.response.data.message } })
        console.log(error.response, "action");
    }
}

export const search = (text) => (dispatch, getstate) => {
    dispatch({ type: "search", payload: { serach: text } })
}