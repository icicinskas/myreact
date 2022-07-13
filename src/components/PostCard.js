import { useNavigate } from "react-router-dom";

const PostCard = ({ item }) => {
  const nav = useNavigate();

  return (
    <div onClick={() => nav("/post/" + item.id)} className="post">
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <br />
      <p className="ta-l">Comments: </p>
    </div>
  );
};

export default PostCard;
