import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer"
import errorReducer from "./errorReducer";
import diaryReducer from "./diaryReducer";

export default combineReducers({
  auth: userReducer,
  posts: postReducer,
  diary: diaryReducer,
  errors: errorReducer,
});
