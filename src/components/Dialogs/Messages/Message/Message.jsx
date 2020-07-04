import React from "react";
import "./Message.css";

const Message = (props) => {
  return (
    <div
      className={
        "message" +
        (props.isFromYou ? " message_right-side" : " message_left-side")
      }
    >
      <span
        className={
          "message__text" +
          (props.isFromYou
            ? " message__text_right-side"
            : " message__text_left-side")
        }
      >
        {props.message}
      </span>
    </div>
  );
};

export default Message;
