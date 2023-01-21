import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { adminLoginReducer } from "./Reducer/adminLoginSignupReducer";
const middleware = [thunk];

const reducer = combineReducers({
  adminLoginReducer: adminLoginReducer,
});

const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));

const initialState = {
  adminLoginReducer: { adminData: adminInfo },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
