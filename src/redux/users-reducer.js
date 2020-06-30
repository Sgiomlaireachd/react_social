import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const UPDATE_FOLLOWING_IN_PROGRESS = "UPDATE-IS-FOLLOWING-IN-PROGRESS";

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
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
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

export const followUser = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
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

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(currentPage));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(updateFollowingInProgress(true, userId));
  usersAPI.followUser(userId).then((resultCode) => {
    if (!resultCode) {
      dispatch(followUser(userId));
      dispatch(updateFollowingInProgress(false, userId));
    }
  });
};

export const unfollow = (userId) => (dispatch) => {
  dispatch(updateFollowingInProgress(true, userId));
  usersAPI.followUser(userId).then((resultCode) => {
    if (!resultCode) {
      dispatch(unfollowUser(userId));
      dispatch(updateFollowingInProgress(false, userId));
    }
  });
};

export default profileReducer;
