import {USER_CREATE_ACCOUNT, USER_LOGOUT} from "./types";
import axios from "axios"
export const logoutUser = () => dispatch => {
  dispatch({
    type: USER_LOGOUT
  })
}