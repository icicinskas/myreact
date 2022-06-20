import React from "react";

const UserProfile = ({ names, image }) => {
  return (
    <div>
      <h1>{names} </h1>
      <img src={image} alt="" />
    </div>
  );
};

export default UserProfile;
