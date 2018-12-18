import { USER_LOGOUT, SET_CURRENT_USER, GET_ERRORS } from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

export const signupUser = (data, callback) => dispatch => {
  axios
    .post("api/users/create", data)
    .then(res => {
      dispatch(loginUser(data, callback));
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const loginUser = (data, callback) => dispatch => {
  axios
    .post("api/users/login", data)
    .then(res => {
      const { token } = res.data;

      localStorage.setItem("jwtToken", token);

      setAuthToken(token);

      const decoded = jwt_decode(token);

      dispatch(setCurrentUser(decoded));
      callback();
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const logoutUser = () => dispatch => {
  //Remove token from localStorage
  localStorage.removeItem("jwtToken");
  //Remove auth headers from future request
  setAuthToken(false);
  dispatch({
    type:USER_LOGOUT
  })
};

//
export const setCurrentUser = payload => {
  return {
    type: SET_CURRENT_USER,
    payload: payload
  };
};
