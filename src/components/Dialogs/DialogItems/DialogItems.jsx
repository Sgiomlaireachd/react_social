import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import "./DialogItems.css";

const DialogItems = (props) => {
  const dialogs = props.dialogsData.map((item, index) => (
    <DialogItem name={item.userName} id={item.id} key={index} />
  ));

  return <div className="dialog__items">{dialogs}</div>;
};

export default DialogItems;
