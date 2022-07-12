import { useContext } from "react";
import Post from "./Post";
import mainContext from "../context/mainContext";

const ShowPosts = () => {
  const { posts, row } = useContext(mainContext);

  const style = {
    flexDirection: row ? "row" : "column",
  };

  return (
    <div className="show d-flex g5 wrap-flex" style={style}>
      {posts.map((x, i) => (
        <Post key={i} item={x} />
      ))}
    </div>
  );
};

export default ShowPosts;
