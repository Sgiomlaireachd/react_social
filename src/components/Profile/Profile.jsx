import React from "react";
import "./Profile.css";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
};

export default Profile;
