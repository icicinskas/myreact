import { useContext } from "react";
import mainContext from "../context/mainContext";
import PostCard from "../components/PostCard";

const AllPostPage = () => {
  const { posts } = useContext(mainContext);
  return (
    <div className="d-flex wrap-flex">
      {posts.map((x) => (
        <PostCard key={x.id} item={x} />
      ))}
    </div>
  );
};

export default AllPostPage;
