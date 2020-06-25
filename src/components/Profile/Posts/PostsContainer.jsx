import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import Posts from './Posts';

const PostsContainer = (props) => {

    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const updateTextArea = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        < Posts
            addPost={addPost}
            updateTextArea={updateTextArea}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    );
};

export default PostsContainer;
