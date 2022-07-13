import mainContext from "../context/mainContext";

import { useRef, useContext } from "react";

const Inputs = () => {
  const imgRef = useRef();
  const titleRef = useRef();

  const { posts, setPost } = useContext(mainContext);

  function addPost() {
    const newPost = {
      image: imgRef.current.value,
      title: titleRef.current.value,
    };

    setPost([...posts, newPost]);
  }

  return (
    <div className="input m10 d-flex fl-col g10">
      <input
        className="p5"
        ref={imgRef}
        type="url"
        placeholder="Enter image url"
      />
      <input
        className="p5"
        ref={titleRef}
        type="text"
        placeholder="Enter image title"
      />
      <button style={{ padding: "3px" }} onClick={addPost}>
        Add Post
      </button>
    </div>
  );
};

export default Inputs;
