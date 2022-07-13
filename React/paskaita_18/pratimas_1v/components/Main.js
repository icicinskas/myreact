import { useContext } from "react";
import PostCard from "./PostCard";
import mainContext from "../context/mainContext";

const Main = () => {
  const { posts, mainBgColor, row } = useContext(mainContext);

  const display = {
    flexDirection: row ? "row" : "column",
  };

  return (
    <div className="main-box " style={{ background: mainBgColor }}>
      <div style={display} className="main grow3">
        {posts.map((x, i) => (
          <PostCard key={i} item={x} />
        ))}
      </div>
    </div>
  );
};

export default Main;
