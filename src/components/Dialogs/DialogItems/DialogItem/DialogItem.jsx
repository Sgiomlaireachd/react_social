import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogItem.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div
      className={
        "dialog__item" +
        (props.userIdFromURL === props.id ? " dialog__item_active" : "")
      }
    >
      <NavLink className="dialog__item_from" to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
