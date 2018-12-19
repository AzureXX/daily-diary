import {} from "./types";
import axios from "axios";

export const getPostsByDate = date => dispatch => {
  axios
    .get("api/posts/date/" + date)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
