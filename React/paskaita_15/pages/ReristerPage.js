import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = (setValid) => {
  const [error, setError] = useState(null);

  const nav = useNavigate();

  const emailInput = useRef();
  const password1Input = useRef();
  const password2Input = useRef();

  function goToUser() {
    nav("/user");
  }

  function submitForm() {
    const form = {
      email: emailInput.current.value,
      passOne: password1Input.current.value,
      passTwo: password2Input.current.value,
    };

    if (!form.email.includes("@") || !form.email.includes("."))
      return setError("Please enter a valid email!");

    if (form.passTwo !== form.passOne) {
      return setError("Passwords don't match");
    }

    if (form.passTwo.length < 3 || form.passTwo.length > 20) {
      return setError("Passsword length is wrong");
    }

    setError(null);
    setValid(true);
    goToUser();
  }

  return (
    <div className="register">
      <div className="input">
        <input
          ref={emailInput}
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <input ref={password1Input} type="text" placeholder="Enter password" />
        <input
          ref={password2Input}
          type="text"
          placeholder="Re-enter password"
        />
      </div>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <div className="reg-btn">
        <button onClick={submitForm}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
