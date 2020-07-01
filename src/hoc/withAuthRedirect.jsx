import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const withAuthRedirect = (Component) => {
  const innerComponent = (props) => {
    if (!props.isLoggedIn) {
      return <Redirect to={"/login"} />;
    }

    return <Component {...props} />;
  };

  const withAuthComponent = connect(mapStateToProps)(innerComponent);
  return withAuthComponent;
};

export default withAuthRedirect;
