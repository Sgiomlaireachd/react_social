import React from "react";

const Users = (props) => {
  const users = props.users.map((u) => (
    <div className="user">
      <img src={u.avatarImgUrl} alt="Avatar"></img>
      <div>{u.fullName}</div>
      <div>{u.status}</div>
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
