import {SWITCH_DATE} from "./types";
import {getPostByDate} from "./postActions";

export const switchDate = (date) => dispatch => {
  dispatch({
    type: SWITCH_DATE,
    date: date
  })
  getPostByDate(date);
} 