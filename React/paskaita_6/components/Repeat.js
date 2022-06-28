import React, { useState, useRef } from "react";

const Repeat = () => {
  const [getImg, setImg] = useState([]);

  const imgInp = useRef();
  const repeatInp = useRef();

  function addImg() {
    const imgArr = [];

    let n = repeatInp.current.value;

    for (let i = 0; i < n; i++) {
      imgArr.push(imgInp.current.value);
    }

    setImg([...getImg, ...imgArr]);
  }

  return (
    <div>
      <div className="top">
        {getImg.map((x) => (
          <img src={x} alt="" />
        ))}
      </div>

      <div className="buttom">
        <input ref={imgInp} type="text" placeholder="Image url" />
        <input
          ref={repeatInp}
          type="number"
          placeholder="How many times to repeat image"
        />
        <button onClick={addImg}>Append</button>
      </div>
    </div>
  );
};

export default Repeat;
