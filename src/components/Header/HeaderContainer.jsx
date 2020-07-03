import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUser } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";
import { setIsLoggedIn } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setUser();
  }

  logout = () => {
    authAPI.logout().then((data) => {
      if (!data.resultCode) {
        this.props.setIsLoggedIn(false);
      }
    });
  };

  render() {
    return <Header {...this.props} logout={this.logout} />;
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};

const HeaderLoginContainer = connect(mapStateToProps, {
  setUser,
  setIsLoggedIn,
})(HeaderContainer);

export default HeaderLoginContainer;
