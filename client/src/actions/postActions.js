import { GET_POSTS_BY_DATE } from "./types";
import axios from "axios";

export const getPostsByDate = date => dispatch => {
  axios
    .get("api/posts/date/" + date)
    .then(res => {
      dispatch({ type: GET_POSTS_BY_DATE, payload: res.data });
    })
    .catch(err => console.log(err));
};
