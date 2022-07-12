import { useRef, useContext } from "react";
import mainContext from "../context/mainContext";

const Color = () => {
  const { setColor } = useContext(mainContext);

  const inp = useRef();

  function changeColor() {
    const inputValue = inp.current.value;
    setColor(inputValue);
  }
  return (
    <div className="color d-flex fl-col g10">
      <input className="p5" ref={inp} type="text" placeholder="Enter Color" />
      <button style={{ padding: "3px" }} onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default Color;
