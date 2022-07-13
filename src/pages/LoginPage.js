import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

const LoginPage = () => {
  const { error, setError, users, setUsers, setValited } =
    useContext(mainContext);

  const emailRef = useRef();
  const passOneRef = useRef();

  const nav = useNavigate();

  function loginUser() {
    setError(null);
    const user = {
      email: emailRef.current.value,
      password: passOneRef.current.value,
    };

    const myUser = users.find(
      (x) => x.email === user.email && x.password === user.password
    );

    if (!myUser) return setError("bad user credentials");

    setValited(true);
    setUsers(myUser);

    nav("/allPosts");
  }

  return (
    <div className="login-box">
      <div className="d-flex fl-col g20">
        <input ref={emailRef} type="text" placeholder="email" />
        <input ref={passOneRef} type="text" placeholder="password" />
      </div>

      {error && <h3>{error}</h3>}
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default LoginPage;
