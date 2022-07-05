import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [profile, setprofile] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setprofile(data);
      });
  }, []);

  return (
    <div className="profile d-flex">
      {profile.map((x) => (
        <div className="profile-box">
          <h3>{x.name}</h3>
          <h4>{x.username}</h4>
          <div>{x.email}</div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
