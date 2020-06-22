import React from "react";
import "./Dialogs.css";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <DialogItems dialogsData={props.state.dialogsData} />
      <Messages messagesData={props.state.messagesData} />
    </div>
  );
};

export default Dialogs;
