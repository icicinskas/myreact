import React, { useState, useRef } from "react";

const Forma = () => {
  const userInput = useRef();
  const emailInput = useRef();
  const pswdInput = useRef();
  const confirmPswdInput = useRef();
  const locationInput = useRef();

  let messageValue = "";

  function create() {
    if (
      !userInput.current.value ||
      userInput.current.value.length < 3 ||
      userInput.current.value.length > 20
    ) {
      return (messageValue = "Enter min 3 max 20 symbols username");
    }

    const emailArr = [];
    emailArr.push(emailInput.current.value);

    if (
      !emailInput.current.value
      // !emailArr.split("").include("@")
      //   !emailInput.current.value.split(" ").include(".")
    ) {
      return (
        (messageValue = "Enter correct email adrres"), console.log(messageValue)
      );
    }

    if (
      !pswdInput.current.value ||
      pswdInput.current.value.length < 3 ||
      pswdInput.current.value.length > 20
    ) {
      return (messageValue = "Enter min 3 max 20 symbols password");
    }
    if (pswdInput.current.value !== confirmPswdInput.current.value) {
      messageValue = "Password doesn't match";
    }
  }

  return (
    <div>
      <div className="form">
        <input ref={userInput} type="text" placeholder="Enter username" />
        <input ref={emailInput} type="text" placeholder="Enter email" />
        <input ref={pswdInput} type="text" placeholder="Enter password" />
        <input
          ref={confirmPswdInput}
          type="text"
          placeholder="Confirm password"
        />
        <select
          ref={locationInput}
          type="text"
          placeholder="Enter your location"
        >
          <option value="vilnius">Vilnius</option>
          <option value="kaunas">Kaunas</option>
          <option value="klaipeda">Klaipėda</option>
          <option value="siauliai">Šiauliai</option>
          <option value="trakai">Trakai</option>
        </select>
        <div className="messege">{messageValue}</div>
        <button onClick={create}>Create account</button>
      </div>
    </div>
  );
};

export default Forma;
