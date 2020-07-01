import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfileInfo } from "../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 8991;
    this.props.setUserProfileInfo(userId);
  }
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to={"/login"} />;
    }
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { setUserProfileInfo })
)(ProfileContainer);
