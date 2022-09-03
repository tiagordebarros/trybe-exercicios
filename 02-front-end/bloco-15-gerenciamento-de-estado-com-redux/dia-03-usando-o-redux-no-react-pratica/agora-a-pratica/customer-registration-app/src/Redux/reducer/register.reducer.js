import { REGISTER_CUSTOMER } from "../actions/types.actions";

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
    default:
        return state;
  }
}

export default registerReducer;
