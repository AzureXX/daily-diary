import { USER_LOGOUT, SET_CURRENT_USER } from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken"


export const signupUser = data => dispatch => {
  console.log(data);
  axios
    .post("api/users/create", data)
    .then(res => {
      dispatch(loginUser(data))
    })
    .catch(err => console.log(err.response.data));
};

export const loginUser = (data) => dispatch => {
  axios
    .post("api/users/login", data)
    .then(res => {
      const { token } = res.data;

      localStorage.setItem("jwtToken", token);

      setAuthToken(token);

      const decoded = jwt_decode(token);

      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(err.response.data));
}

export const logoutUser = () => dispatch => {
  dispatch({
    type: USER_LOGOUT
  });
};

//
export const setCurrentUser = payload => {
  return {
    type: SET_CURRENT_USER,
    payload: payload
  };
};
