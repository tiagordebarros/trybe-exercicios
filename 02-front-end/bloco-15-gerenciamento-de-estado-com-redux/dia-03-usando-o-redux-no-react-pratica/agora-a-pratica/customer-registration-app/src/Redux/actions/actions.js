import { LOGIN, REGISTER_CUSTOMER } from "./types.actions";

export const login = (payload) => ({
    type: LOGIN,
    payload
});

export const registerCustomer = (payload) => ({
    type: REGISTER_CUSTOMER,
    payload
});
