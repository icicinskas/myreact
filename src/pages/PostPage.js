import { useContext } from "react";
import { useParams } from "react-router-dom";
import mainContext from "../context/mainContext";

const PostPage = () => {
  const { posts, users } = useContext(mainContext);

  const { id } = useParams();

  const myPost = () => {
    return posts.find((x) => x.id === Number(id));
  };

  const myUser = () => {
    const post = posts.find((x) => x.id === Number(id));
    return users.find((x) => x.email === post.userEmail);
  };

  return (
    <div>
      <div className="grow1">
        <img src={myPost().image} alt="" />
      </div>
      <div className="grow1">
        <h1>{myPost().title}</h1>
        <h2>{myPost().location}</h2>

        <div>
          <img src={myUser().image} alt="" />
          <h3>{myUser().email}</h3>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
