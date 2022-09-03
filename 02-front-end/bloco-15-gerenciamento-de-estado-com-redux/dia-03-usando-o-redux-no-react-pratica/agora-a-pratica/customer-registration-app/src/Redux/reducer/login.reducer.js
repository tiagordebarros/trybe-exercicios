import { LOGIN } from "../actions/types.actions";

const INITIAL_STATE = {
    email: '',
    password: '',
    status: false,
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN: 
        return {
            ...state,
            ...action.payload,
            status: true,
        }
        default:
        return state;
    }
}

export default loginReducer;
