import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const GalleryPage = () => {
  const [foto, setFoto] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setFoto(data);
      });
  }, []);

  function goToAlbum(id) {
    nav("/album/" + id);
  }

  return (
    <div className="d-flex wrap-flex over foto g5">
      {foto.map((x) => (
        <div
          onClick={() => {
            goToAlbum(x.albumId);
          }}
          className="foto-div d-flex g5"
        >
          <div className="d-flex foto-box g5">
            <img style={{ width: "150px" }} src={x.url} alt="foto" />
            <div className="foto-title">{x.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;
