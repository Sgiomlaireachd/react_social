import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
  postsData: [],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
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
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

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

export const setUserProfileInfo = (userId) => (dispatch) => {
  profileAPI.getProfileInfo(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export default profileReducer;
