import { useContext, useRef } from "react";
import mainContext from "../context/mainContext";

const CreatePostPage = () => {
  const { posts, setPosts } = useContext(mainContext);

  const imgRef = useRef();
  const titleRef = useRef();

  function addPost() {
    const newPost = {
      image: imgRef.current.value,
      title: titleRef.current.value,
    };

    setPosts([...posts, newPost]);
  }

  return (
    <div className="create-post d-flex">
      <input ref={imgRef} type="url" placeholder="Enter Post Image" />
      <input ref={titleRef} type="text" placeholder="Enter Post Title" />
      <button onClick={addPost}>Add Post</button>
    </div>
  );
};

export default CreatePostPage;
