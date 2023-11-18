// src/actions/userActions.js
export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";

export const signIn = (username) => ({
  type: SIGN_IN,
  payload: username
});

export const signUp = (username) => ({
  type: SIGN_UP,
  payload: username
});
