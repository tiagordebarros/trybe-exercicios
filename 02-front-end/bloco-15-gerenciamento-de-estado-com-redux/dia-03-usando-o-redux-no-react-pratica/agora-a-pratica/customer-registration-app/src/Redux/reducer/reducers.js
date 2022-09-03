import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import registerReducer from "./register.reducer";

const rootReducer = combineReducers({ loginReducer, registerReducer });

export default rootReducer;
