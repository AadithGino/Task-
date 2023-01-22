import axios from "axios";
import {
  adminAddEmployee,
  adminGetEmployees,
  adminLogin,
  deleteEmployee,
  editEmployee,
  getSingleEmployee,
  Search,
} from "../../API/ChatApiCalls";
import {
  ADMIN_ADD_EMPLOYEE_FAIL,
  ADMIN_ADD_EMPLOYEE_REQUEST,
  ADMIN_ADD_EMPLOYEE_SUCCESS,
  ADMIN_DELETE_EMPLOYEE_REQUEST,
  ADMIN_DELETE_EMPLOYEE_SUCCESS,
  ADMIN_EDIT_EMPLOYEE_FAIL,
  ADMIN_EDIT_EMPLOYEE_REQUEST,
  ADMIN_EDIT_EMPLOYEE_SUCCESS,
  ADMIN_GET_USERS_DATA_REQUEST,
  ADMIN_GET_USERS_DATA_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_UPDATE_USERS_LIST,
  CLEAR_ADD,
  CLEAR_DELETE,
  CLEAR_EDIT,
  GET_SINGLE_EMPLOYEE_FAIL,
  GET_SINGLE_EMPLOYEE_REQUEST,
  GET_SINGLE_EMPLOYEE_SUCCESS,
} from "../Constants/adminConstant";

const postConfig = {
  headers: {
    "Content-type": "application/json",
  },
};

export const adminLoginAction = (userName, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const { data } = await adminLogin(userName, password);

    localStorage.setItem("adminInfo", JSON.stringify(data));

    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_FAIL, payload: error.response.data });
  }
};

// get all employees.

export const adminGetEmployeesAction = (page, sort) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_GET_USERS_DATA_REQUEST });

    const { data } = await adminGetEmployees(page, sort);

    dispatch({ type: ADMIN_GET_USERS_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_FAIL, payload: error });
  }
};

// admin add employee action

export const adminAddEmployeeAction =
  (Name, Email, Mobile, Designation, Gender, Course, Image) =>
  async (dispatch) => {
    console.log(Image);
    try {
      dispatch({ type: ADMIN_ADD_EMPLOYEE_REQUEST });

      const { data } = await adminAddEmployee(
        Name,
        Email,
        Mobile,
        Designation,
        Gender,
        Course,
        Image
      );

      dispatch({ type: ADMIN_ADD_EMPLOYEE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ADMIN_ADD_EMPLOYEE_FAIL, payload: error.response.data });
    }
  };

// get single employee

export const getSingleEmployeeAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_EMPLOYEE_REQUEST });

    const { data } = await getSingleEmployee(id);

    dispatch({ type: GET_SINGLE_EMPLOYEE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SINGLE_EMPLOYEE_FAIL, payload: error.response.data });
  }
};

// delete Employ action

export const deleteEmployeeAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_DELETE_EMPLOYEE_REQUEST });

    const { data } = await deleteEmployee(id);

    console.log(data);

    dispatch({ type: ADMIN_DELETE_EMPLOYEE_SUCCESS, payload: data });
  } catch (error) {}
};

// edit employee

export const editEmployeeAction =
  (Name, Email, Mobile, Designation, Gender, Course, Image, id) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADMIN_EDIT_EMPLOYEE_REQUEST });

      const { data } = await editEmployee(
        Name,
        Email,
        Mobile,
        Designation,
        Gender,
        Course,
        Image,
        id
      );

      dispatch({ type: ADMIN_EDIT_EMPLOYEE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADMIN_EDIT_EMPLOYEE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const searchAction = (searchKeyword) => async (dispatch) => {
  try {
    const { data } = await Search(searchKeyword);
    dispatch({ type: ADMIN_UPDATE_USERS_LIST, payload: data });
  } catch (error) {}
};

export const Logout = () => async (dispatch) => {
  localStorage.removeItem("adminInfo");
  dispatch({ type: ADMIN_LOGOUT });
};

export const clearEdit = () => async (dispatch) => {
  dispatch({ type: CLEAR_EDIT });
};

export const clearAdd = () => async (dispatch) => {
  dispatch({ type: CLEAR_ADD });
};

export const clearDelete = () => async (dispatch) => {
  dispatch({ type: CLEAR_DELETE });
};
