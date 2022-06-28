import "./App.css";
import { useState, useRef } from "react";
import Chat from "./components/Chat";
import Repeat from "./components/Repeat";
import Forma from "./components/Forma";

function App() {
  const [getColor, setColor] = useState("white");

  const colorValue = useRef();

  function updateColor() {
    setColor(colorValue.current.value);
  }

  const [getUser, setUser] = useState([]);

  const fotoInput = useRef();
  const userInput = useRef();
  const locationInput = useRef();

  function addCart() {
    const userArr = {
      photo: fotoInput.current.value,
      name: userInput.current.value,
      location: locationInput.current.value,
    };

    setUser([...getUser, userArr]);
  }

  return (
    <div className="App" style={{ background: getColor }}>
      <input ref={colorValue} type="text" placeholder="color" />
      <button onClick={updateColor}>Set color</button>

      <section className="section">
        <div className="input">
          <input ref={fotoInput} type="url" placeholder="Place foto url" />
          <input
            ref={userInput}
            type="text"
            placeholder="Enter your username"
          />
          <input
            ref={locationInput}
            type="text"
            placeholder="Enter your location"
          />
          <button onClick={addCart}>ADD</button>
        </div>
        <div className="output">
          {getUser.map((x) => (
            <div>
              <img src={x.photo} alt="" />
              <h2>{x.name}</h2>
              <h3>{x.location}</h3>
            </div>
          ))}
        </div>
      </section>

      <Chat />
      <Repeat />
      <Forma />
    </div>
  );
}

export default App;
