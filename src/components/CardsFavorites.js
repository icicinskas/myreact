import React from "react";
import { Rating } from "react-simple-star-rating";

const Favorites = ({ getFav }) => {
  return (
    <div className="cards">
      {getFav.map((x, i) => (
        <div key={i} className="cards-box">
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
        </div>
      ))}
    </div>
  );
};

export default Favorites;
