import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AlbumPage = () => {
  const nav = useNavigate();

  const { id } = useParams;

  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/" + id)
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
      });
  }, []);

  function goToPost(id) {
    nav("/post/" + id);
  }

  return (
    <div className="div-box">
      {album && <div onClick={() => goToPost(album.userId)}>{album.title}</div>}
    </div>
  );
};

export default AlbumPage;
