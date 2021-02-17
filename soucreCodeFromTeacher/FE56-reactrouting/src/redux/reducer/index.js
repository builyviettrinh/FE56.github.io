import { combineReducers } from "redux";
import listMoviceReducer from "./../../container/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "./../../container/HomeTemplate/DetailPage/modules/reducer";
import authReducer from "./../../container/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "./../../container/AdminTemplate/AddUserPage/modules/reducer";

const rootReducer = combineReducers({
  //key: value
  listMoviceReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer,
});

export default rootReducer;
