import React, { useState } from "react";

const NewFoto = () => {
  const [getFoto, setFoto] = useState(
    "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
  );

  function setNewFoto() {
    let randomFoto = Math.floor(Math.random() * photos.length);
    setFoto(photos[randomFoto]);
  }

  const photos = [
    "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
    "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg",
    "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
    "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",
    "https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
  ];

  return (
    <div>
      <img style={{ width: "200px", height: "200px" }} src={getFoto} alt="" />
      <button onClick={setNewFoto}>Change foto</button>
    </div>
  );
};

export default NewFoto;
