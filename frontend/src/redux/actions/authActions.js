import * as actionTypes from "../constants/authConstants";

export const addAuthToken = (result, token) => async (dispatch) => {
  dispatch({ type: actionTypes.AUTH, data: { result, token } });
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT });
};
