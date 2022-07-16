import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import mainContext from "../context/mainContext";

const PostCard = ({ char }) => {
  const { setPlayer, setGold } = useContext(mainContext);

  const nav = useNavigate();

  function chooseChar() {
    setPlayer(char);
    setGold(char.gold);
    nav("/main/");
  }

  return (
    <div onClick={() => chooseChar()} className="post p5">
      <img src={char.image} alt="" />
      <h3>{char.race}</h3>
      <div>Damage: {char.damage}</div>
      <div>Helth: {char.health} </div>
      <div>Star Gold: {char.gold}</div>
    </div>
  );
};

export default PostCard;
