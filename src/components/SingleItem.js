import { useContext } from "react";
import mainContext from "../context/mainContext";

const SingleItem = ({ item, index }) => {
  const { inventory, setInventory, gold, setGold } = useContext(mainContext);

  function removeItem() {
    const itemSold = inventory[index];
    const leftItems = inventory.filter((x, i) => i !== index);

    setGold(gold + itemSold.price / 2);
    setInventory(leftItems);
  }

  return (
    <div onClick={() => removeItem()} className="inv-box d-flex a-c g20">
      <div className="d-flex grow1">
        <img src={item.image} alt="img" />
      </div>
      <div className="d-flex grow3 fl-col">
        <div>Price: {item.price}</div>
        {item.title && <div>Title: {item.title}</div>}
        {item.maxDamage && <div>Maxdamage: {item.maxDamage}</div>}
      </div>
    </div>
  );
};

export default SingleItem;
