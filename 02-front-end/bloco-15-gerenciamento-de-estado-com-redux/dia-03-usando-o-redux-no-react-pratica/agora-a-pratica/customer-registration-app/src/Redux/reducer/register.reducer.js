import { REGISTER_CUSTOMER, REMOVE_CUSTOMER, SORT_CUSTOMER_BY_NAME } from "../actions/types.actions";

const INITIAL_STATE = {
    customerList: [],
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_CUSTOMER:
        return {
            ...state,
            customerList: [...state.customerList, action.payload ]
        }
    case REMOVE_CUSTOMER:
        return {
            ...state,
            customerList: [...state.customerList ].filter(({ email }) => email !== action.payload)
        }
    case SORT_CUSTOMER_BY_NAME:
        return {
            ...state,
            customerList: [...state.customerList ].sort((a, b) => a.customerName.toLowerCase() < b.customerName.toLowerCase() ? -1 : 0)
        }
    default:
        return state;
  }
}

export default registerReducer;
