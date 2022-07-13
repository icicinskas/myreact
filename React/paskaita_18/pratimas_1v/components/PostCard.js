const PostCard = ({ item }) => {
  return (
    <div>
      <div className="post">
        <img src={item.image} alt="" />
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export default PostCard;
