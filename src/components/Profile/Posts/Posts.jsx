import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const Posts = (props) => {
  const posts = props.postsData.map((item) => (
    <Post
      message={item.message}
      pubDate={item.pubDate}
      likesCount={item.likesCount}
      postName={item.postName}
    />
  ));

  let textAreaRef = React.createRef();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const updateTextArea = () => {
    let text = textAreaRef.current.value;
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className="profile__posts">
      <div>New Post:</div>
      <textarea
        onChange={updateTextArea}
        ref={textAreaRef}
        value={props.newPostText}
      ></textarea>
      <button onClick={addPost} className="new_post_btn">
        Add Post
      </button>

      <h2>My posts:</h2>
      {posts}
    </div>
  );
};

export default Posts;
