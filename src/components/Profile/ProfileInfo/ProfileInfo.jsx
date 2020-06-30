import React from "react";
import "./ProfileInfo.css";
import Preloader from "../../common/Preloader/Prefloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="profile__info">
      <div className="profile__header-img">
        <img src="http://placehold.it/1500x300" alt="Hat"></img>
      </div>
      <div className="profile__user-info">
        <img
          className="profile__avatar"
          src={props.profile.photos.small || "http://placehold.it/125x125"}
          alt="Avatar"
        ></img>
        <span className="profile__user-name">{props.profile.fullName}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
