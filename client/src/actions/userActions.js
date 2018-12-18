import { USER_CREATE_ACCOUNT, USER_LOGOUT } from "./types";
import axios from "axios";

export const signupUser = data => dispatch => {
  console.log(data);
  axios
    .post("api/users/create", data)
    .then(res => console.log(res))
    .catch(err => console.log(err.response.data));
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: USER_LOGOUT
  });
};
