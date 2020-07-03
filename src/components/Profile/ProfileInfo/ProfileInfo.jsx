import React from "react";
import "./ProfileInfo.css";
import Preloader from "../../common/Preloader/Preloader";
import StatusContainer from "./Status/StatusContainer";
import profileHeader from "../../../assets/images/profile_hat.jpg";
import userAvatar from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="profile__info">
      <div className="profile__header-img">
        <img src={profileHeader} alt="Hat"></img>
      </div>
      <div className="profile__user-info">
        <img
          className="profile__avatar"
          src={props.profile.photos.small || userAvatar}
          alt="Avatar"
        ></img>
        <span className="profile__user-name">{props.profile.fullName}</span>
        <StatusContainer />
      </div>
    </div>
  );
};

export default ProfileInfo;
