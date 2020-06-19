import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="http://placehold.it/1500x200"></img>
      </div>
      <div>
        <img src="http://placehold.it/100x100"></img>
        <span>My Name</span>
      </div>
      <div>
        Posts:
        <div>New Post</div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  );
};

export default Profile;
