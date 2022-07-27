import { useRef, useContext } from "react";
import mainContext from "../context/mainContext";

const ProfilePage = () => {
  const { users, setUsers, currentUser, setCurrentUser } =
    useContext(mainContext);

  const urlRef = useRef();
  const passRef = useRef();

  function updateImage() {
    const newArr = users.map((x) => {
      if (x.id === currentUser.id) {
        return { ...x, image: urlRef.current.value };
      }
      return x;
    });

    setUsers(newArr);
  }

  function setImage() {
    const myUser = { ...currentUser };
    myUser.image = urlRef.current.value;
    setCurrentUser(myUser);

    updateImage();
  }

  function passValidation(password) {
    return String(password).match(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[4,20])/
    );
  }

  console.log(users);
  console.log(currentUser);

  function setPassword() {
    const newArr = users.map((x) => {
      if (x.id === currentUser.id && !passValidation(passRef.current.value)) {
        return { ...x, password: passRef.current.value };
      }
      return x;
    });

    setUsers(newArr);
  }

  console.log(users);

  return (
    <div className="profile d-flex g40">
      <div>
        <img src={currentUser.image} alt="img" />
      </div>
      <div className="profile-box d-flex fl-col a-c jc-c g20">
        <div style={{ fontSize: "2em", color: "#551a88" }}>
          <b>{currentUser.username}</b>
        </div>
        <div className="d-flex g40">
          <div className="d-flex fl-col g10 ">
            <input
              style={{ padding: "6px" }}
              ref={urlRef}
              type="text"
              placeholder="image url"
            />

            <input
              style={{ padding: "6px" }}
              ref={passRef}
              type="text"
              placeholder="New password"
            />
          </div>
          <div className="d-flex fl-col g10">
            <button
              style={{ padding: "6px", cursor: "pointer" }}
              onClick={setImage}
            >
              Change Image
            </button>
            <button
              style={{ padding: "6px", cursor: "pointer" }}
              onClick={setPassword}
            >
              Change Pasword
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
