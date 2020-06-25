import React from "react";
import "./Dialogs.css";
import DialogItems from "./DialogItems/DialogItems";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <DialogItems />
      <MessagesContainer />
    </div>
  );
};

export default Dialogs;
