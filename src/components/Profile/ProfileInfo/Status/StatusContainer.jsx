import React from "react";
import Status from "./Status";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserStatus, updateStatus } from "../../../../redux/profile-reducer";
import StatusWithHooks from "./StatusWithHooks";

class StatusContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 8991;
    this.props.getUserStatus(userId);
  }
  render() {
    return (
      <StatusWithHooks
        userStatus={this.props.userStatus}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userStatus: state.profilePage.userStatus,
});

const StatusContainerWithRouter = withRouter(StatusContainer);

export default connect(mapStateToProps, { getUserStatus, updateStatus })(
  StatusContainerWithRouter
);
