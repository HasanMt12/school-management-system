import { combineReducers } from "redux";
import authReducer from "./Slice/authReducer";

const rootReducer = combineReducers({
auth: authReducer,

});
export default rootReducer;