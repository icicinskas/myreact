import { useRef } from "react";

const ReservInput = ({ selection, setName }) => {
  const usernameRef = useRef();

  console.log(selection);

  function reservation() {
    const cell = usernameRef.current.value;
    setName(cell);
  }

  return (
    <div className="d-flex g10">
      <input ref={usernameRef} type="text" placeholder="Enter username" />
      <button onClick={reservation} className="p5">
        Make reservation
      </button>
    </div>
  );
};

export default ReservInput;
