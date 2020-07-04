import React from "react";
import Message from "./Message/Message";
import "./Messages.css";
import NewMessageReduxForm from "./NewMessageForm";

const Messages = (props) => {
  const messages = props.messagesData.map((item) => (
    <Message
      message={item.body}
      key={item.id}
      isFromYou={item.senderName === "sgiomlaireachd"}
    />
  ));

  const sendMessage = (data) => {
    props.onAddMessage(data.message);
  };

  return (
    <div className="messages">
      <div className="messages__messages-block">{messages}</div>
      <NewMessageReduxForm
        className="messages__input-form"
        onSubmit={sendMessage}
        fieldClass="messages__input"
        buttonClass="messages__btn"
      />
    </div>
  );
};

export default Messages;
