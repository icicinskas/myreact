import { useRef } from "react";

const ProfilePage = ({ user, setUser }) => {
  const urlRef = useRef();
  const passRef = useRef();

  function setImage() {
    const myUser = { ...user };
    myUser.image = urlRef.current.value;
    setUser(myUser);
  }

  function setPassword() {
    const myUser = { ...user };
    myUser.password = passRef.current.value;
    setUser(myUser);
  }

  return (
    <div className="profile d-flex g40">
      <div>
        <img src={user.image} alt="img" />
      </div>
      <div className="profile-box d-flex fl-col a-c jc-c g20">
        <div style={{ fontSize: "2em", color: "#551a88" }}>
          <b>{user.username}</b>
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
              placeholder="Old password"
            />

            <input
              style={{ padding: "6px" }}
              ref={passRef}
              type="text"
              placeholder="New password"
            />

            <input
              style={{ padding: "6px" }}
              ref={passRef}
              type="text"
              placeholder="Confirm new password"
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
