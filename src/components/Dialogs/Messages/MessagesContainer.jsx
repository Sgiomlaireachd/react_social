import Messages from "./Messages";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      return dispatch(addMessageActionCreator());
    },
    updateTextArea: (text) => {
      return dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
