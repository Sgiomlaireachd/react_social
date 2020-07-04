import React from "react";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { connect } from "react-redux";
import { getDialogs, getDialogMessages } from "../../redux/dialogs-reducer";
import { withRouter } from "react-router-dom";

class DialogsContainer extends React.Component {
  componentDidMount() {
    this.props.getDialogs();

    // const userId = this.props.match.params.userId || 2;
    // this.props.getDialogMessages(userId);
  }

  componentDidUpdate() {
    const userId = this.props.match.params.userId || 2;
    this.props.getDialogMessages(userId);
  }

  render() {
    return <Dialogs dialogsData={this.props.dialogsData} />;
  }
}

const mapStateToProps = (state) => ({
  dialogsData: state.dialogsPage.dialogsData,
});

export default compose(
  connect(mapStateToProps, { getDialogs, getDialogMessages }),
  withAuthRedirect,
  withRouter
)(DialogsContainer);
