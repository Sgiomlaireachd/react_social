import React from "react";
import Message from "./Message/Message";
import "./Messages.css";
import NewMessageReduxForm from "./NewMessageForm";

const Messages = (props) => {
  const messages = props.messagesData.map((item) => (
    <Message message={item.message} />
  ));

  const sendMessage = (data) => {
    console.log(data);
    props.addMessage(data.message);
  };

  return (
    <div className="messages">
      {messages}
      <NewMessageReduxForm onSubmit={sendMessage} />
    </div>
  );
};

export default Messages;
