import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userName } = useParams();

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, []);

  function addUser() {
    return profile.find((x) => x.username === userName);
  }

  const myUser = addUser();

  return (
    <div className="profile d-flex m20 fl-col g5">
      <div>{userName}</div>
      {myUser ? (
        <div className="profile-box">
          <h3>{myUser.name}</h3>
          <h4>{myUser.phone}</h4>
          <div>{myUser.website}</div>
          <div>{myUser.email}</div>
        </div>
      ) : (
        <div className="profile-box">There are not such user</div>
      )}
    </div>
  );
};

export default UserPage;
