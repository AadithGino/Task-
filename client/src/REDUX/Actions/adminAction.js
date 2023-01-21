import axios from "axios";
import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "../Constants/adminConstant";

const postConfig = {
  headers: {
    "Content-type": "application/json",
  },
};

export const adminLoginAction = (userName, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const { data } = await axios.post(
      process.env.base_URL + "/login",
      { userName, password },
      postConfig
    );

    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_FAIL, payload: error });
  }
};
