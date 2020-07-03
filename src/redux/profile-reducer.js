import { profileAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_USER_STATUS = "profile/SET-USER-STATUS";

const initialState = {
  postsData: [],
  newPostText: "",
  profile: null,
  userStatus: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 4,
        message: state.newPostText,
        pubDate: "11.05.2021",
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        postsData: [...state.postsData, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.userStatus,
      };
    default:
      return state;
  }
};

// Action creators

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (userStatus) => ({
  type: SET_USER_STATUS,
  userStatus,
});

// Thunk creators

export const setUserProfileInfo = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfileInfo(userId);
  dispatch(setUserProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  const status = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(status));
};

export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.setUserStatus(status);
  dispatch(setUserStatus(status));
};

export default profileReducer;
