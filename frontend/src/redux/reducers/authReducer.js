import { AUTH, LOGOUT } from "../constants/authConstants";

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem(
        "godenShoesProfile",
        JSON.stringify({ ...action?.data })
      );
      return { ...state, authData: action.data };
    default:
      return state;
  }
};
