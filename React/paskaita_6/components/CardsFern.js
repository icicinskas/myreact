import { useState } from "react";
import CardFern from "./CardFern";

function CardsFern() {
  const [items, setItems] = useState(
    [
      {
        id: 9,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYttoMZp--9ZpQ6Zcel-ru5CiWDc7_PWP04s1AIyD3arKR50t0fdcY4qDWURlvrDTX4Kg&usqp=CAU",
        stat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYttoMZp--9ZpQ6Zcel-ru5CiWDc7_PWP04s1AIyD3arKR50t0fdcY4qDWURlvrDTX4Kg&usqp=CAU",
      },
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Osmunda_regalis1.jpg",
        stat: "",
      },
    ].sort(() => Math.random() - 0.5)
  );

  function addImg() {
    const imgArr = [];
    const n = 19;

    for (let i = 0; i < n; i++) {
      imgArr.push(items[0]);
    }

    setItems([...items, ...imgArr]);
  }

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      <div className="cards">
        {items.map((item, index) => (
          <CardFern
            key={index}
            item={item}
            id={index}
            handleClick={handleClick}
          />
        ))}
      </div>

      <div className="btn">
        <button onClick={addImg}>Start new game</button>
      </div>
    </div>
  );
}

export default CardsFern;
