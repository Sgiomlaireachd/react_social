import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateTextArea: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const PostsContainer = connect(mapStatetoProps, mapDispatchToProps)(Posts);

export default PostsContainer;
