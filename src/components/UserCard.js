import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

const UserCard = ({ post }) => {
  const { users } = useContext(mainContext);

  const nav = useNavigate();

  return (
    <div
      className="card d-flex g20 a-c"
      onClick={() => nav("/user/" + post.id)}
    >
      <div>
        <img
          style={{ width: "150px", height: "150px" }}
          src={post.image}
          alt="img"
        />
      </div>
      <div>
        <h3>{post.username}</h3>
      </div>
    </div>
  );
};

export default UserCard;
