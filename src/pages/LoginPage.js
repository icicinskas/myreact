import { useContext } from "react";
import mainContext from "../context/mainContext";
import PostCard from "../components/PostCard";

const LoginPage = ({ characters }) => {
  const {} = useContext(mainContext);
  return (
    <div className="d-flex wrap-flex">
      {characters.map((x, i) => (
        <PostCard key={i} item={x} />
      ))}
    </div>
  );
};

export default LoginPage;
