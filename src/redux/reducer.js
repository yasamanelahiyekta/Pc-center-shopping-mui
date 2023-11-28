
export const home = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "home":

            return payload;

        default:
            return state;
    }
}
export const oneproduct = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "oneproduct":

            return payload;

        default:
            return state;
    }
}
export const signup = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "signup":

            return payload;

        default:
            return state;
    }
}
export const login = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "login":

            return payload;

        default:
            return state;
    }
}
export const search = (state = { search: "" }, { type, payload }) => {
    switch (type) {
        case "search":

            return payload;

        default:
            return state;
    }
}
export const getprofile = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "getprofile":

            return payload;

        default:
            return state;
    }
}

export const changeprofile = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "changeprofile":

            return payload;

        default:
            return state;
    }
}
export const cartnumber = (state = { data: [] }, { type, payload }) => {
    switch (type) {
        case "add":

            return payload;
        case "remove":

            return payload;
        case "delete":

            return payload;
        case "clear":

            return payload;

        default:
            return state;
    }
}
export const creatCart = (state = { creat: [] }, { type, payload }) => {
    switch (type) {
        case "creatCart":
            return payload;
        default:
            return state;
    }
}
export const totalprice = (state = { totalp: 0 }, { type, payload }) => {
    switch (type) {
        case "price":
            return payload;
        default:
            return state;
    }
}
export const changepassword = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "changepassword":
            return payload;
        default:
            return state;
    }
}
export const submit = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "submit":
            return payload;
        default:
            return state;
    }
}
export const orders = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "orders":
            return payload;
        default:
            return state;
    }
}
export const oneorder = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "1order":
            return payload;
        default:
            return state;
    }
}
export const getavatar = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "getavatar":
            return payload;
        default:
            return state;
    }
}
export const flagavatar = (state = { data: false }, { type, payload }) => {
    switch (type) {
        case "flagavatar":
            return payload;
        default:
            return state;
    }
}