import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Aside = () => {
  const nav = useNavigate();

  function goToProfile() {
    nav("/profile");
  }

  function goToUser() {
    nav("/user");
  }

  function goToContants() {
    nav("/contants");
  }

  function goToPost() {
    nav("/post");
  }

  function goToGallery() {
    nav("/gallery");
  }

  function goToHome() {
    nav("/home");
  }

  return (
    <div className="aside">
      <div className="link">
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contants">Contants</Link>
        <Link to="/gallery">Gallery</Link>

        <button onClick={goToProfile}>Go To Profile Page</button>
        <button onClick={goToUser}>Go To User Page</button>
        <button onClick={goToContants}>Go To Contants Page</button>
        <button onClick={goToPost}>Go To Post Page</button>
        <button onClick={goToGallery}>Go To Gallery Page</button>
        <button onClick={goToHome}>Go To Home Page</button>
      </div>
    </div>
  );
};

export default Aside;
