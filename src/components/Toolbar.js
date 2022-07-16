import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

const Toolbar = () => {
  const { player, setPlayer, gold } = useContext(mainContext);

  const nav = useNavigate();

  function logout() {
    setPlayer(null);
    nav("/");
  }

  return (
    <div className="toolbar">
      {player && (
        <div className="toolbar-box">
          <div className="toolbar-links d-flex g40">
            <Link to="/main">Main</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/arena">Arena</Link>
          </div>

          <div className="gold">Gold: {gold} </div>
          <div></div>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
