import React from "react";
import userAvatar from "../../assets/images/user.png";
import "./Users.css";

const Users = (props) => {
  const users = props.users.map((u) => (
    <div className="user" key={u.id}>
      <img
        className="user__avatar"
        src={u.photos.small ? u.photos.small : userAvatar}
        alt="Avatar"
      ></img>
      <div>{u.name}</div>
      <div>{u.status ? u.status : "No status."}</div>
      <div className="user__location">
        <span>{u.country}</span>
        <span>{u.city}</span>
      </div>
      {u.followed ? (
        <button
          onClick={() => {
            props.unfollowUser(u.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            props.followUser(u.id);
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
