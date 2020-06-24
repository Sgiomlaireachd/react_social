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
        store={props.store}
        newPostText={props.state.newPostText}
      />
    </div>
  );
};

export default Profile;
