import { useNavigate } from "react-router-dom";

const UserCard = ({ post }) => {
  const nav = useNavigate();

  return (
    <div
      className="card d-flex g20 a-c"
      onClick={() => nav("/user/" + post.id)}
    >
      <div>
        <img src={post.image} alt="img" />
      </div>
      <div>
        <h3>{post.username}</h3>
      </div>
    </div>
  );
};

export default UserCard;
