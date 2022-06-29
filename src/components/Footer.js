import React, { useRef, useState, useEffect } from "react";

const Footer = ({ getUser, setUser }) => {
  const [getShowButton, setShowButton] = useState(true);

  const imgRef = useRef();
  const inpUser = useRef();
  const inpGender = useRef();

  function addUser() {
    const user = {
      foto: imgRef.current.value,
      user: inpUser.current.value,
      gender: inpGender.current.value,
    };

    console.log(user);

    setUser([...getUser, user]);
  }

  useEffect(() => {
    if (getUser.length > 50) setShowButton(false);
  }, [getUser]);

  return (
    <div>
      <footer>
        <div className="input">
          <input ref={imgRef} type="url" placeholder="Enter image url" />
          <input ref={inpUser} type="text" placeholder="Enter name" />
          <select ref={inpGender} name="" id="">
            <option value="empty"></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {getShowButton && <button onClick={addUser}>Add</button>}
      </footer>
    </div>
  );
};

export default Footer;
