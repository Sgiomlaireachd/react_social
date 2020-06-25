import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import "./DialogItems.css";
import StoreContext from "../../../store-context";

const DialogItems = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const dialogs = state.dialogsPage.dialogsData.map((item) => (
          <DialogItem name={item.name} id={item.id} />
        ));

        return <div className="dialog__items">{dialogs}</div>;
      }}
    </StoreContext.Consumer>
  );
};

export default DialogItems;
