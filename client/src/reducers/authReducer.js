import { SET_CURRENT_USER, USER_LOADING } from "../actions/type";

//check empty validble
const isEmpty = require("is-empty");
//implement State
const initialState = {
  isAuthenticated: false,
  users: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        users: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
