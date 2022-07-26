import { useNavigate } from "react-router-dom";

const UserCard = ({ users }) => {
  const nav = useNavigate();

  return (
    <div className="post" onClick={() => nav("/user/" + users.id)}>
      <img src={users.image} alt="" />
      <h3>{users.username}</h3>
    </div>
  );
};

export default UserCard;
