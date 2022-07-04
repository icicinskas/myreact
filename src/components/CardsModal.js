import React from "react";
import { Rating } from "react-simple-star-rating";

const Modal = ({ modal, getCard, getFav, setFav }) => {
  function addFav() {
    setFav(getCard);
    modal(false);
  }

  console.log(getFav);

  return (
    <div className="cards-fav">
      <div className="cards-box-fav">
        <div className="close-btn">
          <button onClick={() => modal(false)} className="close">
            &times;
          </button>
        </div>

        <div className="fav-body">
          <div className="img-fav">
            <img src={getCard.image} alt="img" />
          </div>

          <div className="title-fav">
            <h4>
              <span>{getCard.titleLtu}</span>
            </h4>
            <div className="h6">
              {getCard.genre.map((y) => (
                <h6>{y}</h6>
              ))}
            </div>
            <br />
            <h6>duration: {getCard.duration}</h6>
            <p>{getCard.description}</p>
            <Rating
              style={{ fontSize: "5px" }}
              ratingValue={getCard.imdbRating * 10}
              readonly={true}
            />
            <div className="btn-fav">
              <button onClick={() => addFav()}>Add to favorites</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
