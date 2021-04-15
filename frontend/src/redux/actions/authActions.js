import * as actionTypes from "../constants/authConstants";
import axios from "axios";

export const addAuthToken = (result, token) => async (dispatch) => {
  dispatch({ type: actionTypes.AUTH, data: { result, token } });
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT });
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await axios.post("/user/signup", formData);

    dispatch({ type: actionTypes.AUTH, payload: data });
    dispatch({ type: actionTypes.LOGGEDIN, payload: data });

    router.push("/");
  } catch (error) {
    console.log(error, error.message);
  }
};

export const signIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await axios.post("/user/signin", formData);

    dispatch({ type: actionTypes.AUTH, payload: data });
    dispatch({ type: actionTypes.LOGGEDIN, payload: data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
