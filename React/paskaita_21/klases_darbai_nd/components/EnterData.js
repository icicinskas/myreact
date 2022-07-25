import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/users";

const EnterData = () => {
  const imgRef = useRef();
  const usernameRef = useRef();
  const locationRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();
  const colorRef = useRef();

  const dispatch = useDispatch();

  function addUser() {
    const newPost = {
      image: imgRef.current.value,
      username: usernameRef.current.value,
      location: locationRef.current.value,
      gender: genderRef.current.value,
      age: ageRef.current.value,
      color: colorRef.current.value,
    };

    dispatch(addItem(newPost));

    function clear() {
      imgRef.current.value = "";
      usernameRef.current.value = "";
      locationRef.current.value = "";
      genderRef.current.value = "";
      ageRef.current.value = "";
      colorRef.current.value = "";
    }

    clear();
  }

  return (
    <div className="user d-flex fl-col a-c jc-c g20">
      <input
        ref={imgRef}
        className="p5"
        type="url"
        placeholder="Enter Image url"
      />
      <input
        ref={usernameRef}
        className="p5"
        type="text"
        placeholder="Enter Username"
      />
      <input
        ref={locationRef}
        className="p5"
        type="text"
        placeholder="Enter Location"
      />
      <input
        ref={genderRef}
        className="p5"
        type="text"
        placeholder="Enter gender"
      />
      <input
        ref={ageRef}
        className="p5"
        type="text"
        placeholder="Enter years"
      />
      <input
        ref={colorRef}
        className="p5"
        type="text"
        placeholder="Enter hair color"
      />
      <button onClick={addUser} className="p5">
        Add User
      </button>
    </div>
  );
};

export default EnterData;
