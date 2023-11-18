// src/reducers/userReducer.js
import { SIGN_IN, SIGN_UP } from "../actions/userActions";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
