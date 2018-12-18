import {USER_LOGOUT} from "../actions/types"

const initialState = {
  isAuth: true,
  authUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true
      };
    case USER_LOGOUT:
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
};
