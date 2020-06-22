import React from "react";
import Message from "./Message/Message";
import "./Messages.css";

const Messages = (props) => {
  const messages = props.messagesData.map((item) => (
    <Message message={item.message} />
  ));
  return <div className="messages">{messages}</div>;
};

export default Messages;
