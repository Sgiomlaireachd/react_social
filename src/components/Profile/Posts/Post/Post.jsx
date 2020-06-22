import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <img className="post__image" src="http://placehold.it/100x100"></img>
      <p>{props.message}</p>
      <span>Pub Date: {props.pubDate}</span>
      <br></br>
      <span>Likes: {props.likesCount}</span>
    </div>
  );
};

export default Post;
