import React from "react";
import userAvatar from "../../assets/images/user.png";
import "./Users.css";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const followUser = (userId) => {
    props.follow(userId);
  };
  const unfollowUser = (userId) => {
    props.unfollow(userId);
  };

  const users = props.users.map((u) => (
    <div className="user" key={u.id}>
      <NavLink to={"/profile/" + u.id}>
        <img
          className="user__avatar"
          src={u.photos.small ? u.photos.small : userAvatar}
          alt="Avatar"
        ></img>
      </NavLink>
      <div>{u.name}</div>
      <div>{u.status ? u.status : "No status."}</div>
      {u.followed ? (
        <button
          disabled={props.followingInProgress.some((id) => id === u.id)}
          onClick={() => {
            unfollowUser(u.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.followingInProgress.some((id) => id === u.id)}
          onClick={() => {
            followUser(u.id);
          }}
        >
          Follow
        </button>
      )}
      <hr />
    </div>
  ));

  return <div className="users">{users}</div>;
};

export default Users;
