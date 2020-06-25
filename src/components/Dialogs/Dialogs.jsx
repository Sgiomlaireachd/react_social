import React from "react";
import "./Dialogs.css";
import DialogItems from "./DialogItems/DialogItems";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <DialogItems dialogsData={props.state.dialogsData} />
      <MessagesContainer store={props.store} />
    </div>
  );
};

export default Dialogs;
