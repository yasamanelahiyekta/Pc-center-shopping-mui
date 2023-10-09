export const home = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "home":

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
