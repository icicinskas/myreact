import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

const Toolbar = () => {
  const { valited, setUsers } = useContext(mainContext);

  const nav = useNavigate();

  function logout() {
    setUsers(null);
    nav("/");
  }

  return (
    <div className="toolbar d-flex g20">
      {!valited ? (
        <div className="d-flex g20">
          <button onClick={() => nav("/")}>Login</button>
          <button onClick={() => nav("/register")}>Register</button>
        </div>
      ) : (
        <div className="d-flex g20 toolbar-main">
          <div className="d-flex g20">
            <button onClick={() => nav("/allPosts")}>All Posts</button>
            <button onClick={() => nav("/createPost")}>Create Post</button>
            <button onClick={() => nav("/post")}>Post</button>
          </div>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
