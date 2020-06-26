import React from "react";
import "./Dialogs.css";
import DialogItemsContainer from "./DialogItems/DialogItemsContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <DialogItemsContainer />
      <MessagesContainer />
    </div>
  );
};

export default Dialogs;
