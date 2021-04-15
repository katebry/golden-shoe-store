import { AUTH, LOGOUT, LOGGEDIN } from "../constants/authConstants";

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem(
        "godenShoesProfile",
        JSON.stringify({ ...action?.data })
      );
      return { ...state, authData: action.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case LOGGEDIN:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};
