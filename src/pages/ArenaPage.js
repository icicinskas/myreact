import { useContext } from "react";
import mainContext from "../context/mainContext";

import PostCard from "../components/PostCard";
import MonsterCard from "../components/MonsterCard";

const ArenaPage = ({ monsters }) => {
  const { player } = useContext(mainContext);

  return (
    <div className="arena d-flex fl-col m5-a">
      <div className="d-flex a-c">
        <div>
          <div>
            <PostCard char={player} />
          </div>

          <div className="player-hp-border">
            <div className="player-hp"></div>
          </div>
        </div>

        <div>
          <button className="attack">Attack</button>
        </div>

        <div>
          <div>
            <MonsterCard char={monsters} />
          </div>

          <div className="monster-hp-border">
            <div className="monster-hp"></div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="weapon-box"></div>
        </div>

        <button className="inv-btn">Inventory</button>
      </div>
    </div>
  );
};

export default ArenaPage;
