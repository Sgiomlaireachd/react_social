import React from "react";
import Messages from "./Messages";
import { sendMessage } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class MessagesContainer extends React.Component {
  onAddMessage = (message) => {
    const userId = this.props.match.params.userId || 2;
    this.props.sendMessage(userId, message);
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

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withRouter
)(MessagesContainer);
