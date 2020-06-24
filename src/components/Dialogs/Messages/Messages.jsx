import React from "react";
import Message from "./Message/Message";
import "./Messages.css";

const Messages = (props) => {
  const messages = props.messagesData.map((item) => (
    <Message message={item.message} />
  ));

  let textAreaRef = React.createRef();

  const updateNewMessageTextActionCreator = (newText) => {
    return { type: "UPDATE-NEW-MESSAGE-TEXT", newText: newText };
  };

  const addMessageActionCreator = () => {
    return { type: "ADD-MESSAGE" };
  };

  const updateTextArea = () => {
    const text = textAreaRef.current.value;
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  const sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  return (
    <div className="messages">
      {messages}
      <div className="create_new_message">
        <textarea
          ref={textAreaRef}
          onChange={updateTextArea}
          value={props.store.getState().dialogsPage.newMessageText}
        ></textarea>
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Messages;
