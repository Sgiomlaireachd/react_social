import { authAPI } from "../api/api";

const SET_USER_INFO = "auth/SET-USER-INFO";
const SET_IS_LOGGED_IN = "auth/SET-IS-LOGGED-IN";

const initialState = {
  id: null,
  login: null,
  email: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.data,
        isLoggedIn: true,
      };
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export const setUserInfo = (id, login, email) => ({
  type: SET_USER_INFO,
  data: { id, login, email },
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  isLoggedIn,
});

export const setUser = () => async (dispatch) => {
  const data = await authAPI.authMe();
  if (!data.resultCode) {
    const { id, email, login } = data.data;
    dispatch(setUserInfo(id, login, email));
  }
};

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (!data.resultCode) {
    dispatch(setIsLoggedIn(true));
  }
};

export default authReducer;
