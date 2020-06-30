import { authAPI } from "../api/api";

const SET_USER_INFO = "SET-USER-INFO";

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

export const setUser = () => (dispatch) => {
  authAPI.authMe().then((data) => {
    if (!data.resultCode) {
      const { id, email, login } = data.data;
      dispatch(setUserInfo(id, login, email));
    }
  });
};

export default authReducer;
