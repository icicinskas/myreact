import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Modal from "./CardsModal";

const Cards = ({ movies, getFav, setFav }) => {
  const [getModal, setModal] = useState(false);
  const [getCard, setCard] = useState({});

  function card(link) {
    setCard(link);
    setModal(true);
  }

  return (
    <div className="cards">
      {movies.slice(0, 100).map((x, i) => (
        <div onClick={() => card(x)} key={i} index={i} className="cards-box">
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

      {getModal && (
        <Modal
          modal={setModal}
          getCard={getCard}
          getFav={getFav}
          setFav={setFav}
        />
      )}
    </div>
  );
};

export default Cards;
