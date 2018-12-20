import {SWITCH_DATE} from "../actions/types"
const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_DATE: {
      return action.payload
    }
    default:
      return state;
  }
};