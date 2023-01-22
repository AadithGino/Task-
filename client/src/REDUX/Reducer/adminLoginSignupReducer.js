import {
  ADMIN_ADD_EMPLOYEE_FAIL,
  ADMIN_ADD_EMPLOYEE_REQUEST,
  ADMIN_ADD_EMPLOYEE_SUCCESS,
  ADMIN_DELETE_EMPLOYEE_FAIL,
  ADMIN_DELETE_EMPLOYEE_REQUEST,
  ADMIN_DELETE_EMPLOYEE_SUCCESS,
  ADMIN_EDIT_EMPLOYEE_FAIL,
  ADMIN_EDIT_EMPLOYEE_REQUEST,
  ADMIN_EDIT_EMPLOYEE_SUCCESS,
  ADMIN_GET_USERS_DATA_FAIL,
  ADMIN_GET_USERS_DATA_REQUEST,
  ADMIN_GET_USERS_DATA_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_UPDATE_USERS_LIST,
  GET_SINGLE_EMPLOYEE_FAIL,
  GET_SINGLE_EMPLOYEE_REQUEST,
  GET_SINGLE_EMPLOYEE_SUCCESS,
} from "../Constants/adminConstant";

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };

    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, adminData: action.payload };

    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminGetUserDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_GET_USERS_DATA_REQUEST:
      return { loading: true };

    case ADMIN_GET_USERS_DATA_SUCCESS:
      return { loading: false, employeeList: action.payload };

    case ADMIN_GET_USERS_DATA_FAIL:
      return { loading: false, error: action.payload };

    case ADMIN_UPDATE_USERS_LIST:
      return {employeeList:action.payload}
    default:
      return state;
  }
};

export const adminAddEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ADD_EMPLOYEE_REQUEST:
      return { addloading: true };

    case ADMIN_ADD_EMPLOYEE_SUCCESS:
      return { addloading: false, addData: action.payload };

    case ADMIN_ADD_EMPLOYEE_FAIL:
      return { addloading: false, addError: action.payload };
    default:
      return state;
  }
};

export const getSingleEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_EMPLOYEE_REQUEST:
      return { singleEmployeeLoading: true };

    case GET_SINGLE_EMPLOYEE_SUCCESS:
      return { singleEmployeeLoading: false, singleEmployee: action.payload };

    case GET_SINGLE_EMPLOYEE_FAIL:
      return {
        singleEmployeeLoading: false,
        singleEmployeeError: action.payload,
      };
    default:
      return state;
  }
};

export const adminDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DELETE_EMPLOYEE_REQUEST:
      return { deleteloading: true };

    case ADMIN_DELETE_EMPLOYEE_SUCCESS:
      return { deleteloading: false, deleteData: action.payload };

    case ADMIN_DELETE_EMPLOYEE_FAIL:
      return { deleteloading: false, deleteError: action.payload };
    default:
      return state;
  }
};

export const editEmployeeReduecr = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_EDIT_EMPLOYEE_REQUEST:
      return { editLoading: true };

    case ADMIN_EDIT_EMPLOYEE_SUCCESS:
      return { editLoading: false, editData: action.payload };

    case ADMIN_EDIT_EMPLOYEE_FAIL:
      return { editLoading: false, editError: action.payload };
    default:
      return state;
  }
};
