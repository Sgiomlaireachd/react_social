import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = (props) => {
  return (
    <div className="profile__info">
      <div className="profile__header-img">
        <img src="http://placehold.it/1500x300"></img>
      </div>
      <div className="profile__user-info">
        <img
          className="profile__avatar"
          src="http://placehold.it/125x125"
        ></img>
        <span className="profile__user-name">My Name</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
