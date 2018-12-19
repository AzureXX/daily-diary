import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer"
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: userReducer,
  posts: postReducer,
  errors: errorReducer
});
