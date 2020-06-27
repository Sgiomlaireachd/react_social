const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      avatarImgUrl: "https://placehold.it/100x100",
      fullName: "Denis",
      status: "Learning React",
      location: { country: "Ukraine", city: "Mykolaiv" },
    },
    {
      id: 2,
      followed: false,
      avatarImgUrl: "https://placehold.it/100x100",
      fullName: "Alex",
      status: "Learning React too",
      location: { country: "USA", city: "New York" },
    },
    {
      id: 3,
      followed: false,
      avatarImgUrl: "https://placehold.it/100x100",
      fullName: "Mark",
      status: "Learning React tooo",
      location: { country: "Germany", city: "Berlin" },
    },
  ],
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
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export default profileReducer;
