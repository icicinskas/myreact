import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

const ChatCard = ({ chat }) => {
  const { conversation, setConversation, msg, setMsg } =
    useContext(mainContext);

  const nav = useNavigate();

  function close() {
    const closeMsg = conversation.filter((x) => x.messageId !== chat.messageId);
    setConversation(closeMsg);
    const closeChat = msg.filter((x) => x.id !== conversation.messageId);
    setMsg([...msg, closeChat]);
    nav("/conversation");
  }

  return (
    <div className="chat-box">
      <div
        onClick={() => nav("/chat/" + chat.messageId)}
        className="chat d-flex g20 a-c"
      >
        Conversation with:
        <span style={{ fontSize: "1.2em" }}>{chat.user}</span>
      </div>

      <div onClick={close} className="close">
        &times;
      </div>
    </div>
  );
};

export default ChatCard;
