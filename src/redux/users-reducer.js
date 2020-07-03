import { usersAPI } from "../api/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const TOGGLE_FOLLOW = "users/TOGGLE_FOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const UPDATE_FOLLOWING_IN_PROGRESS = "users/UPDATE-IS-FOLLOWING-IN-PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  currentPage: 10,
  totalUsersCount: 0,
  isFetching: true,
  followingInProgress: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          } else {
            return u;
          }
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UPDATE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followOrUnfollow
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

//Actions

export const toggleFollowUser = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  count,
});
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const updateFollowingInProgress = (followOrUnfollow, userId) => ({
  type: UPDATE_FOLLOWING_IN_PROGRESS,
  followOrUnfollow,
  userId,
});

// Thunks

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(setCurrentPage(currentPage));
};

export const follow = (userId) => async (dispatch) => {
  dispatch(updateFollowingInProgress(true, userId));
  const resultCode = await usersAPI.followUser(userId);

  if (!resultCode) {
    dispatch(toggleFollowUser(userId));
    dispatch(updateFollowingInProgress(false, userId));
  }
};

export const unfollow = (userId) => async (dispatch) => {
  dispatch(updateFollowingInProgress(true, userId));
  const resultCode = await usersAPI.followUser(userId);
  if (!resultCode) {
    dispatch(toggleFollowUser(userId));
    dispatch(updateFollowingInProgress(false, userId));
  }
};

export default profileReducer;
