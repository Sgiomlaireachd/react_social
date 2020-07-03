import React from "react";
import Message from "./Message/Message";
import "./Messages.css";
import NewMessageReduxForm from "./NewMessageForm";

const Messages = (props) => {
  const messages = props.messagesData.map((item, index) => (
    <Message message={item.message} key={index} />
  ));

  const sendMessage = (data) => {
    props.onAddMessage(data.message);
  };

  return (
    <div className="messages">
      {messages}
      <NewMessageReduxForm onSubmit={sendMessage} />
    </div>
  );
};

export default Messages;
