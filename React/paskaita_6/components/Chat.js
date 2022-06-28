import React, { useState, useRef } from "react";

const Chat = () => {
  const [getText, setText] = useState([]);
  // const [getError, setError] = useState(false);

  const fotoInput = useRef();
  const textInput = useRef();

  function sendtext() {
    const textArr = {
      foto: fotoInput.current.value,
      text: textInput.current.value,
    };

    if (!textInput.current.value) alert("iveskite teksta");

    setText([...getText, textArr]);
  }

  return (
    <div>
      <div className="top">{}</div>
      {getText.map((x) => (
        <div>
          {x.foto && <img src={x.foto} alt="" />}
          {/* <img src={x.foto} alt="" /> */}
          <p>{x.text}</p>
        </div>
      ))}
      <div className="buttom">
        <div className="imp">
          <input ref={fotoInput} type="text" />
          <input ref={textInput} type="text" />
        </div>
        <button onClick={sendtext}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
