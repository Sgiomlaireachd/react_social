import React from "react";
import Messages from "./Messages";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../redux/dialogs-reducer';

const MessagesContainer = (props) => {

    const state = props.store.getState();

    const updateTextArea = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    const sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    return (
        <Messages
            addMessage={sendMessage}
            updateTextArea={updateTextArea}
            messagesData={state.dialogsPage.messagesData}
            newMessageText={state.dialogsPage.newMessageText}
        />
    );
};

export default MessagesContainer;
