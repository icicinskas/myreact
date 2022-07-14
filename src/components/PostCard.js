import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import mainContext from "../context/mainContext";

const PostCard = ({ item }) => {
  const { users, setUsers } = useContext(mainContext);

  const nav = useNavigate();

  function chooseChar() {
    nav("/main/");
  }

  return (
    <div onClick={() => chooseChar()} className="post">
      <img src={item.image} alt="" />
      <h3>{item.race}</h3>
      <div>Damage: {item.damage}</div>
      <div>Gold: {item.gold}</div>
    </div>
  );
};

export default PostCard;
