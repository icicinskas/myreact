import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { username } = useParams();

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, []);

  function addUser() {
    return profile.find((x) => x.username === username);
  }

  const myUser = addUser();

  return (
    <div className="profile d-flex">
      <h1>{username}</h1>
      {myUser ? (
        <div className="profile-box">
          <h3>{myUser.name}</h3>
          <h4>{myUser.username}</h4>
          <div>{myUser.email}</div>
        </div>
      ) : (
        <div>USER DOES NOT EXIST</div>
      )}
    </div>
  );
};

export default UserPage;
