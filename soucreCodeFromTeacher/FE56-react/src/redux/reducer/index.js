import { combineReducers } from "redux";
import userReducer from "./../../Usermanagement-redux/modules/reducer";

const rootReducer = combineReducers({
  //key: value
  userReducer, // userReducer: userReducer,
});

export default rootReducer;
