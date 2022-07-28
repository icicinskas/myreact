const MessageCard = ({ msg }) => {
  return (
    <div>
      <div>
        {msg.user}: {msg.message}
      </div>
    </div>
  );
};

export default MessageCard;
