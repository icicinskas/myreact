import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MessageCard from "../components/MessageCard";
import mainContext from "../context/mainContext";

const SingleChatPage = () => {
  const { currentUser, conversation, msg, setMsg } = useContext(mainContext);
  const { id } = useParams();
  const nav = useNavigate();
  const messageRef = useRef();

  const myMsg = conversation.find((x) => x.messageId === Number(id));

  useEffect(() => {
    if (!msg) return;

    const firstMsg = {
      message: myMsg.message,
      user: currentUser.username,
      id: conversation.messageId,
    };

    setMsg([...msg, firstMsg]);
  }, []);

  console.log(msg);

  function sendMsg() {
    const message = {
      message: messageRef.current.value,
      user: currentUser.username,
      id: conversation.messageId,
    };

    setMsg([...msg, message]);
  }

  console.log(msg);

  return (
    <div className="chat-room">
      <button className="back-btn" onClick={() => nav("/conversation")}>
        Go Back
      </button>
      <div className="enter-box">
        {msg.map((x, i) => (
          <MessageCard key={i} msg={x} sendMsg={sendMsg} />
        ))}
      </div>
      <div className="input-msg">
        <input ref={messageRef} type="text" placeholder="Enter your message" />
        <button onClick={sendMsg}>Send Message</button>
      </div>
    </div>
  );
};

export default SingleChatPage;
