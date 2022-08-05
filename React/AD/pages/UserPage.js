import { useContext } from "react";
import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

const UserPage = () => {
  const { users, currentUser, conversation, setConversation } =
    useContext(mainContext);
  const { id } = useParams();
  const nav = useNavigate();
  const myUser = users.find((x) => x.id === Number(id));

  const messegeRef = useRef();

  function start() {
    const newMessage = {
      message: messegeRef.current.value,
      your: currentUser.username,
      yourImg: currentUser.image,
      user: myUser.username,
      userId: myUser.id,
      userImg: myUser.image,
      messageId: Date.now(),
    };

    setConversation([...conversation, newMessage]);

    nav("/conversation");
  }

  return (
    <div style={{ width: "800px" }} className="user-box d-flex">
      <div className=" grow1">
        <img style={{ width: "300px" }} src={myUser.image} alt="" />
      </div>

      <div className="grow1">
        <h1>{myUser.username}</h1>

        <div className="d-flex fl-col g10">
          <textarea
            ref={messegeRef}
            style={{ fontSize: "1.1em", padding: "5px" }}
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <button className="pntr p5" onClick={start}>
            Conversation
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
