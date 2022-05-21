import axios from "axios";
import store from "~/stores";
import {isAuthenticated} from "~/composables/auth";

const api = axios.create({
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Accept": "application/json"
    },
    withCredentials: true
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
 **/

api.interceptors.response.use(
    res => res,
    err => {
        if (err.response.status === 401 && isAuthenticated.value) {
            store.dispatch('logout');
        }
        return Promise.reject(err);
    }
);

export default api;
