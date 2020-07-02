import { authAPI } from "../api/api";

const SET_USER_INFO = "SET-USER-INFO";
const SET_IS_LOGGED_IN = "SET-IS-LOGGED-IN";

const initialState = {
  id: null,
  login: null,
  email: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return {
        ...state,
        ...action.data,
        isLoggedIn: true,
      };
    }
    case SET_IS_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    }
    default:
      return state;
  }
};

export const setUserInfo = (id, login, email) => {
  return {
    type: SET_USER_INFO,
    data: { id, login, email },
  };
};

export const setIsLoggedIn = (isLoggedIn) => {
  return {
    type: SET_IS_LOGGED_IN,
    isLoggedIn,
  };
};

export const setUser = () => (dispatch) => {
  authAPI.authMe().then((data) => {
    if (!data.resultCode) {
      const { id, email, login } = data.data;
      dispatch(setUserInfo(id, login, email));
    }
  });
};

export const loginUser = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (!data.resultCode) {
      dispatch(setIsLoggedIn(true));
    }
  });
};

export default authReducer;
