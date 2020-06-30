import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfileInfo } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2;
    this.props.setUserProfileInfo(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfileInfo })(
  WithUrlProfileContainer
);
