import React, { useEffect, useState } from "react";

const GalleryPage = () => {
  const [foto, setFoto] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setFoto(data);
      });
  }, []);

  return (
    <div className="d-flex wrap-flex over g-5">
      {foto.map((x) => (
        <div>
          <img style={{ width: "150px" }} src={x.url} alt="foto" />
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;
