import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ users, setUser }) => {
  const usernameRef = useRef();
  const passOneRef = useRef();

  const [error, setError] = useState(null);

  const nav = useNavigate();

  function loginUser() {
    setError(null);
    const user = {
      username: usernameRef.current.value,
      password: passOneRef.current.value,
    };

    const myUser = users.find(
      (x) => x.username === user.username && x.password === user.password
    );

    if (!myUser) return setError("bad user credentials");

    setUser(myUser);
    nav("/profile");
  }

  return (
    <div className="login-box">
      <div className="d-flex fl-col g20">
        <input ref={usernameRef} type="text" placeholder="username" />
        <input ref={passOneRef} type="text" placeholder="password" />
      </div>

      <div className="error">{error && <h3>{error}</h3>}</div>

      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default LoginPage;
