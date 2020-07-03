import React from "react";
import Messages from "./Messages";
import { addMessage } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

class MessagesContainer extends React.Component {
  onAddMessage = (message) => {
    this.props.addMessage(message);
  };

  render() {
    return <Messages {...this.props} onAddMessage={this.onAddMessage} />;
  }
}

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
  };
};

export default connect(mapStateToProps, { addMessage })(MessagesContainer);
