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
export const oneproduct = (id) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "oneproduct", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios(`http://kzico.runflare.run/product/${id}`)
        const newData = JSON.parse(JSON.stringify(data))
        dispatch({ type: "oneproduct", payload: { data: newData, loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "oneproduct", payload: { data: [], loading: false, error: error } })
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
        dispatch({ type: "login", payload: { data: [], loading: false, error: error.response } })
        console.log(error.response, "action");
    }
}

export const search = (text) => (dispatch, getstate) => {
    dispatch({ type: "search", payload: { serach: text } })
}
export const getprofile = (token) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "getprofile", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios.get(
            "http://kzico.runflare.run/user/profile",
            {
                headers: {
                    authorization:
                        `Bearer ${token}`,
                },
            }
        )
        const newData = JSON.parse(JSON.stringify(data));
        const user = localStorage.setItem("user", JSON.stringify(newData))
        dispatch({ type: "getprofile", payload: { data: newData, loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "getprofile", payload: { data: [], loading: false, error: error } })
        console.log(error);

    }
}
export const changeprofile = (token, firstname, lastname, gender, age, city) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "changeprofile", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios.put(
            "http://kzico.runflare.run/user/change-profile",
            {
                firstname: `${firstname}`,
                lastname: `${lastname}`,
                gender: `${gender}`,
                age: age,
                city: `${city}`,
            },
            {
                headers: {
                    authorization:
                        `Bearer ${token} `,
                },
            }
        )
        const newData = JSON.parse(JSON.stringify(data))
        console.log(newData);
        dispatch({ type: "changeprofile", payload: { data: newData, loading: false, error: "" } })
        localStorage.removeItem("pdetails")

    } catch (error) {
        dispatch({ type: "changeprofile", payload: { data: [], loading: false, error: error } })
    }


}
export const addcartnumber = (item) => (dispatch, getstate) => {
    const newData = JSON.parse(JSON.stringify(getstate().cartnumber.data))
    newData.push(item)
    console.log(newData);
    localStorage.setItem("cartnumber", JSON.stringify(newData))
    dispatch({ type: "add", payload: { data: newData } })
}
export const clearcartnumber = () => (dispatch, getstate) => {
    localStorage.removeItem("cartnumber")
    dispatch({ type: "clear", payload: { data: [] } })
}
export const removecartnumber = (id) => (dispatch, getstate) => {
    const cart = JSON.parse(localStorage.getItem("cartnumber"))
    const help = cart.filter(item => item._id == id)
    const help2 = cart.filter(item => item._id !== id)
    help.shift()
    const newcart = help.concat(help2)
    console.log(newcart, "newcart");
    localStorage.setItem("cartnumber", JSON.stringify(newcart))

    dispatch({ type: "remove", payload: { data: newcart } })
}
export const deletecartnumber = (id) => (dispatch, getstate) => {
    const cart = JSON.parse(localStorage.getItem("cartnumber"))
    const newcart = cart.filter(item => item._id !== id)
    localStorage.setItem("cartnumber", JSON.stringify(newcart))
    dispatch({ type: "delete", payload: { data: newcart } })
}
export const getavatar = (token, formData) => async (dispatch) => {
    try {
        const { data } = await axios.post(
            "http://kzico.runflare.run/user/profile-image",
            formData,
            {
                headers: {
                    authorization:
                        `Bearer ${token}`,
                },
            }
        )
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
export const changepassword = (token, passo, passn) => async (dispatch) => {
    try {
        dispatch({ type: "changepassword", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios.put(
            "http://kzico.runflare.run/user/change-password",
            {
                old_password: `#${passo}`,
                new_password: `#${passn}`,
            },
            {
                headers: {
                    authorization:
                        `Bearer ${token}`,
                },
            }
        )
        const newData = JSON.parse(JSON.stringify(data))
        dispatch({ type: "changepassword", payload: { data: newData, loading: false, error: "" } })
        console.log(data, "data");
    } catch (error) {
        dispatch({ type: "changepassword", payload: { data: [], loading: false, error: error } })
        console.log(error, "error");
    }
}
export const totalprice = (data) => (dispatch, getstate) => {
    const price = null
    const p = data.map(item => price + item.price)
    const tprice = p.reduce((total, item) => total + item, 0);
    console.log(p);
    console.log(tprice);
    dispatch({ type: "price", payload: { totalp: tprice } })
}
export const submit = (token, city, address, postcode, phone, items, price) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "submit", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios.post(
            "http://kzico.runflare.run/order/submit",
            {
                orderItems: items,
                shippingAddress: {
                    address: `${address}`,
                    city: `${city}`,
                    postalCode: `${postcode}`,
                    phone: "09123425678",
                },
                paymentMethod: "cash",
                shippingPrice: "5",
                totalPrice: price,
            },
            {
                headers: {
                    authorization:
                        `Bearer ${token}`,
                },
            }
        )
        const newData = JSON.parse(JSON.stringify(data));
        dispatch({ type: "submit", payload: { data: newData, loading: false, error: "" } })
        dispatch(clearcartnumber())
    } catch (error) {
        dispatch({ type: "submit", payload: { data: [], loading: false, error: error } })
        console.log(error);

    }
}
export const orders = (token) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "orders", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios.get("http://kzico.runflare.run/order/", {
            headers: {
                authorization:
                    `Bearer ${token}`,
            },
        })
        const newData = JSON.parse(JSON.stringify(data));
        dispatch({ type: "orders", payload: { data: newData, loading: false, error: "" } })


    } catch (error) {
        dispatch({ type: "orders", payload: { data: [], loading: false, error: error } })
        console.log(error);
    }
}
export const oneorder = (token, id) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "1order", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios.get(`http://kzico.runflare.run/order/${id}`, {
            headers: {
                authorization:
                    `Bearer ${token}`,
            },
        })
        const newData = JSON.parse(JSON.stringify(data));
        dispatch({ type: "1order", payload: { data: newData, loading: false, error: "" } })


    } catch (error) {
        dispatch({ type: "1order", payload: { data: [], loading: false, error: error } })
        console.log(error);
    }
}
export const flagavatar = () => (dispatch, getstate) => {

    dispatch({ type: "flagavatar", payload: !getstate().flagavatar })
    console.log(getstate().flagavatar);
}