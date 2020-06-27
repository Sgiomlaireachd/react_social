import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followAC(userId));
    },
    unfollowUser: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const PostsContainer = connect(mapStatetoProps, mapDispatchToProps)(Users);

export default PostsContainer;
