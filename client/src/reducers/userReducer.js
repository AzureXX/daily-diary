import {USER_LOGOUT, SET_CURRENT_USER} from "../actions/types"

const initialState = {
  isAuth: false,
  authUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        authUser: action.payload,
        isAuth: true
      };
    case USER_LOGOUT:
      return {
        ...state,
        authUser: {},
        isAuth: false
      };
    default:
      return state;
  }
};
