import Messages from "./Messages";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      return dispatch(addMessageActionCreator(message));
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
