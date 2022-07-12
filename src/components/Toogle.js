import React, { useContext, useRef } from "react";
import mainContext from "../context/mainContext";

const Toogle = () => {
  const { row, setRow } = useContext(mainContext);

  return (
    <div className="toogle d-flex g10 m10">
      <input onChange={() => setRow(!row)} type="checkbox" />
      <label htmlFor="">Toogle posts display</label>
    </div>
  );
};

export default Toogle;
