import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userLoginReducer";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
import { userOtpReducer } from "./reducers/userOtpReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userOtp : userOtpReducer
});

const userInfoFromStorage = localStorage.getItem("hackUser")
  ? JSON.parse(localStorage.getItem("hackUser"))
  : null;

const initialState = {
  userLogin: { hackUser: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
