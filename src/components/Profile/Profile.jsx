import React from "react";
import "./Profile.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <Posts
        postsData={props.state.postsData}
        addPost={props.addPost}
        newPostText={props.state.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
