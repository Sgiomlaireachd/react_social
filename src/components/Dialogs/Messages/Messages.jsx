import React from "react";
import Message from "./Message/Message";
import "./Messages.css";
import NewMessageReduxForm from "./NewMessageForm";

const Messages = (props) => {
  console.log("MESSAGES:", props);
  const messages = props.messagesData.map((item) => (
    <Message message={item.body} key={item.id} />
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
