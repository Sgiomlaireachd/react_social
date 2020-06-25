import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../store-context";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const updateTextArea = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <Posts
            addPost={addPost}
            updateTextArea={updateTextArea}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
