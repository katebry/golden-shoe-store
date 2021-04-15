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
    dispatch({ type: actionTypes.AUTH, payload: data });

    const { data } = await axios.post("/user/signup", formData);

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.AUTH, payload: data });

    const { data } = await axios.post("/user/signin", formData);

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
