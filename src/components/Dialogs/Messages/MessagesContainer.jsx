import React from "react";
import Messages from "./Messages";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../store-context";

const MessagesContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const updateTextArea = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        const sendMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        return (
          <Messages
            addMessage={sendMessage}
            updateTextArea={updateTextArea}
            messagesData={state.dialogsPage.messagesData}
            newMessageText={state.dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
