import { LOGIN, REGISTER_CUSTOMER, REMOVE_CUSTOMER, SORT_CUSTOMER_BY_NAME } from "./types.actions";

export const login = (payload) => ({
    type: LOGIN,
    payload
});

export const registerCustomer = (payload) => ({
    type: REGISTER_CUSTOMER,
    payload
});

export const removeCustomer = (payload) => ({
    type: REMOVE_CUSTOMER,
    payload
});

export const sortCustomerByName = (payload) => ({
    type: SORT_CUSTOMER_BY_NAME,
    payload
});
