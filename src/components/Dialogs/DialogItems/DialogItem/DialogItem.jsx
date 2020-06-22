import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogItem.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className="dialog__item">
      <NavLink className="dialog__item_from" to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
