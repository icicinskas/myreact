import React from 'react';

const Message = ({message}) => {


    return (
        <div className="msg">
            {message.photo && <img src={message.photo} alt=""/>}
            <p>{message.message}</p>
        </div>
    );
};

export default Message;