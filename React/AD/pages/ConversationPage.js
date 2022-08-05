import { useContext } from "react";
import ChatCard from "../components/ChatCrad";
import mainContext from "../context/mainContext";

const ConversationPage = () => {
  const { conversation } = useContext(mainContext);

  console.log(conversation);

  return (
    <div>
      {conversation.map((x, i) => (
        <ChatCard key={i} chat={x} />
      ))}
    </div>
  );
};

export default ConversationPage;
