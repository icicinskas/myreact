import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

const Favorites = ({ getFav, setFav }) => {
  const [number, setNumber] = useState(0);

  const genders = {
    Aminaciniai: 0,
    Veiksmo: 0,
    Dramos: 0,
    Nuotykiai: 0,
    Moksliniai: 0,
    Šeimai: 0,
    Komedijos: 0,
    Romantiniai: 0,
    Trileriai: 0,
    Vesternai: 0,
    Mistiniai: 0,
    Siaubo: 0,
    Fantastiniai: 0,
    Kriminaliniai: 0,
    Istoriniai: 0,
  };

  useEffect(() => {
    getFav.map((x) => {
      if (x.gender.includes("Aminaciniai")) genders["Aminaciniai"]++;
      if (x.gender.includes("Veiksmo")) genders["Veiksmo"]++;
      if (x.gender.includes("Dramos")) genders["Dramos"]++;
      if (x.gender.includes("Šeimai")) genders["Šeimai"]++;
    });
    setNumber(genders);
  }, [getFav]);

  const remove = (index) => {
    setFav([
      ...getFav.slice(0, index),
      ...getFav.slice(index + 1, getFav.length),
    ]);
  };

  return (
    <div className="cards">
      <div className="top">
        <p>Animaciniai: {number["Aminaciniai"]} </p>
        <p>Veiksmo: {number["Veiksmo"]} </p>
        <p>Dramos: {number["Dramos"]} </p>
        <p>Šeimai: {number["Šeimai"]} </p>
      </div>
      {getFav.map((x, i) => (
        <div key={i} index={i} className="cards-box">
          <div className="img">
            <img src={x.image} alt={x.titleLtu} />
          </div>

          <div className="title">
            <h5>
              <span>{x.titleLtu}</span>
            </h5>
            <div className="h6">
              {x.genre.map((y) => (
                <h6>{y}</h6>
              ))}
            </div>
            <h6>duration: {x.duration}</h6>
            <Rating
              style={{ fontSize: "5px" }}
              ratingValue={x.imdbRating * 10}
              readonly={true}
            />
          </div>
          <button onClick={() => remove()} className="delete">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
